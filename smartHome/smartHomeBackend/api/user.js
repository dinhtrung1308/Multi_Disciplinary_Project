const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

// Create a new user POST /api/user/signup
router.post('/user/signup', (req, res) => {
    const user = new User({
        fullName: req.body.fullName,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });

    user.save().then(result => {
        res.send(result);
    }).catch(err => console.log(err));

});

// Verify the user when login POST /api/user/login
router.post('/user/login', async (req, res) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({ username: username })
        .then(user => {
            if(!user){
                res.json({ status: 'wrong' })
            }
            if (user.password === password) {
                res.send(user)
            }
            else{
                res.json({ status: 'wrong' })
            }
        }).catch(err => {
            console.log(err)
        })
})

// Find a user GET /api/user/:id
router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .exec()
        .then(doc => {
            if (!doc) res.status(404).send({ message: "Not found User with id"});
            else res.status(200).json(doc);
         })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

// Update a user's password PUT /api/user/:id 
router.put('/user/:id', (req, res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(doc => {
            if (!doc) res.status(404).send({ message: "Not found User with id" });
            else res.status(200).json({message: "Successfully update user"});
         })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        }); 
});

// Delete a user DELETE /api/user/:id
router.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    User.then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot delete User with id=${id}. Maybe User was not found!`
            });
        } else {
            res.send({
                message: "User was deleted successfully!"
            });
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
});

module.exports = router;
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Scene = require("../models/scene.model")
const User = require("../models/user.model");

// All the handlers fro the path api/scene

// Add a scene to the scene’s list of a user POST /:id
router.post('/:id', (req, res) => {
    const uid = req.params.id;
    User.findById(uid)
        .exec()
        .then(user => {
            if (!user) res.status(404).send({ message: "Not found User with id" });
            else {
                const scene = new Scene({
                    name: req.body.scene.name,
                    user: uid
                });
                user.sceneList.push(scene.id);
                user.save().then(result1 => {
                    scene.save().then(result2 => {
                        res.send({message: "Scene has been successfully created for user"});
                    }).catch(err => console.log(err));
                }).catch(err => console.log(err));
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

// Get scene list of a user GET /:id
router.get('/:id', (req, res) => {
    const uid = req.params.id;
    User.findById(uid)
        .populate('sceneList')
        .then(user => {
            if (!user) res.status(404).send({ message: "Not found User with id" });
            else {
                res.status(200).json({sceneList: user.sceneList});   
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

// Delete a scene in a scene list of a user DELETE /:id/:sId
router.delete('/:id/:sId', (req, res) => {
    const sId = req.params.sId;
    const id = req.params.id;

    User.findById(id, function (error, user) {
        if (error) res.status(500).send({ error: error });
        // update sceneList of the user
        user.updateOne({ $pull: { sceneList: sId } }, function (error) {
            if (error) res.status(500).send({ error: error });
            // Delete the scene from given collection
            Scene.deleteOne({ _id: sId }, function (error) {
                if (error) res.status(500).send({ error: error });
                res.send({
                    message: "Scene with given id was deleted successfully!"
                });
            });
        })
    });
});

// Modify a scene PUT /:id
router.put('/:id', (req, res) => {
    const sceneId = req.params.id;
    Scene.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
    .then(doc => {
        if (!doc) res.status(404).send({ message: "Not found Scene with id" });
        else res.status(200).json({message: "Successfully update user"});
     })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
});

module.exports = router;
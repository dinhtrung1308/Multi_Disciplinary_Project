const express = require("express");
const router = express.Router();
const Warning = require("../models/warning.model");

// Add a Warning POST /api/warning
router.post('/', (req, res) => {

    const warning = new Warning({
        userID: req.body.userID,
        sensorType: req.body.sensorType,
        warningName: req.body.warningName,
        minValue: req.body.minValue,
        maxValue: req.body.maxValue,
    })
    warning.save()
        .then(data => {
            res.send(data)
        }).catch(err => {
            console.log(err)
        })
})

// Returns all Warning of a User POST /api/warning/getList
router.post('/getList', async (req, res) => {
    var userID = req.body.userID

    Warning.find({ userID: userID })
        .then(warning => {
            if (!warning) {
                res.json({ status: 'wrong' })
            }
            else {
                res.json({ warning })
            }
        }).catch(err => {
            console.log(err)
        })
})

// Delete a Warning DELETE /api/warning/delete
router.post('/delete', (req, res) => {
    const warningID = req.body.warningID;
    Warning.remove({ _id: warningID }, function (err, result) {
        if (err) {
            console.err(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;
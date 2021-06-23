const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Scene = require("../models/scene.model");
const Action = require("../models/action.model");
// All the handlers for the path api/action

// Add action to a scene POST /api/action/:sceneId
router.post('/:sceneId', (req, res) => {
    const sceneId = req.params.sceneId;
    Scene.findById(sceneId)
        .exec()
        .then(scene => {
            if (!scene) res.status(404).send({ message: "Not found Scene with id" });
            else {
                const action = new Action({
                    command: req.body.action.command,
                    device: req.body.action.device,
                    scene: sceneId,
                });
                scene.actionList.push(action.id);
                scene.save().then(result1 => {
                    action.save().then(result2 => {
                        res.send({message: "Action has been successfully added"});
                    }).catch(err => console.log(err));
                }).catch(err => console.log(err));
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

// Delete action from scene DEL list /api/action/:id/:aId
router.delete('/:sceneId/:actionId', (req, res) => {
    const sceneId = req.params.sceneId;
    const actionId = req.params.actionId;

    Scene.findById(sceneId, function (error, scene) {
        if (error) res.status(500).send({ error: error });
        // update actionList of the scene
        scene.updateOne({ $pull: { actionList: actionId } }, function (error) {
            if (error) res.status(500).send({ error: error });
            // Delete the action from given scene
            Action.deleteOne({ _id: actionId }, function (error) {
                if (error) res.status(500).send({ error: error });
                res.send({
                    message: "Action with given id was deleted successfully!"
                });
            });
        })
    });
});

// Modify/Update an action PUT /api/action/:aid
router.put('/:actionId', (req, res) => {
    const actionId = req.params.actionId;
    Action.findByIdAndUpdate(actionId, req.body, {useFindAndModify:false})
    .then(doc => {
        if (!doc) res.status(404).send({ message: "Not found Action with id" });
        else res.status(200).json({message: "Successfully update action"});
     })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
});

// Get action list of a scene GET /api/action/:id
router.get('/:sceneId', (req, res) => {
    const sceneId = req.params.sceneId;
    Scene.findById(sceneId)
        .populate('actionList')
        .then(scene => {
            if (!scene) res.status(404).send({ message: "Not found Scene with id" });
            else {
                res.status(200).json({actionList: scene.actionList});   
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Scene = require("../models/scene.model")
const User = require("../models/user.model");

// All the handlers for the path api/feedback

// Post a feedback POST /
router.post('/', (req, res) => {
    const uid = req.body.userId;
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
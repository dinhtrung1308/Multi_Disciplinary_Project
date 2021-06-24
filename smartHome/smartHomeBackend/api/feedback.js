const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Feedback = require("../models/feedback.model")
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
                const feedback = new Feedback({
                    problem: req.body.scene.problem,
                    user: uid
                });
                problem.save()
                    .then(result => {
                    res.send({message: "Feedback has been successfully created for user"});
                }).catch(res.status(500).json({ error: err }));
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});
const mongoose = require("mongoose");
const userModel = require("./user.model");
const sceneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    actionList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Action' }]
});

sceneSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});




module.exports = mongoose.model("Scene", sceneSchema);
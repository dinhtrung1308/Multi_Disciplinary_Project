const mongoose = require("mongoose");
const actionSchema = new mongoose.Schema({
    command: {
        type: String,
        required: true,
    },
    device: {
        type: String,
        required: true,
    },
    scene: {type: mongoose.Schema.Types.ObjectId, ref: 'Scene'}
});

actionSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});




module.exports = mongoose.model("Action", actionSchema);
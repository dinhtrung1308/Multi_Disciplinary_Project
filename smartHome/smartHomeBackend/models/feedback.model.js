const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
    problem: {
        type: String,
        required: true
    },
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

feedbackSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model('Feedback', feedbackSchema);
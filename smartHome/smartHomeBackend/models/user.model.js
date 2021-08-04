const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sceneList: [{type: mongoose.Schema.Types.ObjectId,ref: 'Scene'}]
})

// userSchema.method("toJSON", function() {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
//   });

module.exports = mongoose.model('User', userSchema);
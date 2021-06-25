const mongoose = require('mongoose')

const WarningSchema = new mongoose.Schema({
    userID:{
        type: String,
        required: true
    },
    sensorType:{
        type:String,
        required: true
    },
    warningName:{
        type:String,
        required: true
    },
    minValue:{
        type:String,
        required: true
    },
    maxValue:{
        type:String,
        required: true
    },
    warningDate:{
        type:String,
        required: false
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Warning', WarningSchema)
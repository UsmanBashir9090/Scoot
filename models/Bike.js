const mongoose      = require('mongoose')
const Schema        = mongoose.Schema

const bikeSchema    = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    model: {
        type: Number
    },
    timeSlot: {
        type: String 
    }
}, {timestamps: true})

const Bike = mongoose.model('Bike', bikeSchema)
module.exports = Bike
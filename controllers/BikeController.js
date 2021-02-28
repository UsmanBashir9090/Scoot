const Bike  = require('../models/Bike')

//Show the list of Bikes

const index = (req, res, next) => {
    Bike.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!'
        })
    })
}
//Search
const show = (req, res, next) => {
    let BikeID = req.body.BikeID
    Bike.findById(BikeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
        message: 'An error Occured!'
        })
    })
}
//create
const store = (req, res, next) => {
    let bike = new Bike({
        name: req.body.name,
        type: req.body.type,
        model: req.body.model, 
        timeSlot: req.body.timeSlot
    })
    bike.save()
    .then(response => {
        res.json({
            message: 'Bike added Successfully!'
        })
    })
    .catch(error => {
        res.json({
        message: 'An error Occured!'
        })
    })

}
//update not working correctly

const update = (req, res, next) => {
    let BikeID = req.body.BikeID

    let updatedData = {
        name: req.body.name,
        type: req.body.type,
        model: req.body.type,
        timeSlot: req.body.timeSlot


    }

    Bike.findByIdAndUpdate(BikeID, {$set: updatedData})
    .then(response => {
        res.json({
            message: 'Bike updated Successfully!'
        })
    })
    .catch(error => {
        res.json({
        message: 'An error Occured!'+error
        
        })
    })
}

const destroy = (req, res, next) => {
    let BikeID = req.body.BikeID
    Bike.findByIdAndRemove(BikeID)
    .then(response => {
        res.json({
            message: 'Bike deleted Successfully!'
        })
    })
    .catch(error => {
        res.json({
        message: 'An error Occured!'
        })
    })
}

module.exports = {
    index, show, store ,update, destroy
}
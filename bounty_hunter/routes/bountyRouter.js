const express = require('express')
const bountyRouter = express.Router()
const Bounties = require('../models/bountySchema.js')
// const {v4: uuidv4} = require('uuid')

// //my initial fake data
// const bounties = [
//     {firstName: "Just", lastName: "Surviving", isAlive: 'Alive', bountyAmount: '100', isJedi: 'Jedi', _id: uuidv4()},
//     {firstName: "Hiding", lastName: "FromYou", isAlive: 'Alive', bountyAmount: '200', isJedi: 'Sith', _id: uuidv4()},
//     {firstName: "iamgonna", lastName: "GetYou", isAlive: 'Dead', bountyAmount: '600', isJedi: "Jedi", _id: uuidv4()}
// ]

// //express get request for all data
// bountyRouter.get('/', (req, res) => {
//     res.send(bounties)
// })

//get all request mongoose
bountyRouter.get('/', (req, res, next) => {
    Bounties.find((error, bounties) => {
        if(error){
            res.status(500)
            return next(error)
        }
        return res.status(200).send(bounties)
    })
})

// get one by id request mongoose
bountyRouter.get('/:bountyId', (req, res, next) => {
    Bounties.findOne({_id: req.params.bountyId}, (error, bounty) => {
        if(error){
            res.status(500)
            return next(error)
        }
        return res.status(200).send(bounty)
    })
})

//mongoose query request isAlive
bountyRouter.get('/search/isAlive', (req, res, next) => {
    Bounties.find({isAlive: req.query.isAlive}, (error, bounty) => {
        if(error){
            res.status(500)
            return next(error)
        }
        return res.status(200).send(bounty)
    })
})

//mongoose query request isJedi
bountyRouter.get('/search/isJedi', (req, res, next) => {
    Bounties.find({isJedi: req.query.isJedi}, (error, bounty) => {
        if(error){
            res.send(500)
            return next(error)
        }
        return res.status(200).send(bounty)
    })
})

// //express post request to add data
// bountyRouter.post('/', (req, res) => {
//     const newBounty = req.body //newBounty is equal the request body
//     newBounty._id = uuidv4() //the newBounty._id is being assigned an id from uuidv4()
//     bounties.push(newBounty) //pushing newBoundy with an Id to bounties data array
//     res.send(newBounty) //response is being sent which is the newBouty
// })

//mongoose post request
bountyRouter.post('/', (req, res, next) => {
    const newBounty = new Bounties(req.body)
    newBounty.save((error, savedBounty) => {
        if(error){
            res.status(500)
            return next(error)
        }
        return res.status(200).send(savedBounty)
    })
})

// //express delete request to delete data
// bountyRouter.delete('/:bountyId', (req, res) => {
//     const bountyId = req.params.bountyId //assigning bountyId to bountyId which comes from the request body's params
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId) // finding the index of bounty
//     bounties.splice(bountyIndex, 1) //splicing out the bounty and the bountyIndex 
//     res.send('Successfully deleted bounty')
// })

//mongoose delete request
bountyRouter.delete('/:bountyId', (req, res, next) => {
    Bounties.findByIdAndDelete({_id: req.params.bountyId}, (error, deletedItem) => {
        if(error){
            res.status(500)
            return next(error)
        }
        return res.status(200).send(`${deletedItem.firstName} ${deletedItem.lastName} has been eliminated from your Bounty List`)
    })
})

// //express put request to change data
// bountyRouter.put('/:bountyId', (req, res) => {
//     const bountyId = req.params.bountyId //assigning bountyId to bountyId which comes from the request body's params
//     const updatedObject = req.body //variable being assigned the request body
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId) //finding the index as stated above
//     const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject) // Object.assign(target, ...sources) target - what to apply the sources properties too. source- object containing the properites you want to apply --MDN. in this case bouties we are targeting at [bounty index] and updating it with updated object
//     res.send(updatedBounty)
// })

//mongoose put request
bountyRouter.put('/:bountyId', (req, res, next) => {
    Bounties.findByIdAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        {new: true},
        (error, updatedBounty) => {
            if(error){
                res.status(500)
                return next(error)
            }
            return res.status(200).send(updatedBounty)
        }
    )
})

module.exports = bountyRouter
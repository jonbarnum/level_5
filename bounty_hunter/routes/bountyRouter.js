const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

//my initial fake data
const bounties = [
    {firstName: "Just", lastName: "Surviving", isAlive: 'Alive', bountyAmount: '100', isJedi: 'Jedi', _id: uuidv4()},
    {firstName: "Hiding", lastName: "FromYou", isAlive: 'Alive', bountyAmount: '200', isJedi: 'Sith', _id: uuidv4()},
    {firstName: "iamgonna", lastName: "GetYou", isAlive: 'Dead', bountyAmount: '600', isJedi: "Jedi", _id: uuidv4()}
]

//express get request for all data
bountyRouter.get('/', (req, res) => {
    res.send(bounties)
})

//express post request to add data
bountyRouter.post('/', (req, res) => {
    const newBounty = req.body //newBounty is equal the request body
    newBounty._id = uuidv4() //the newBounty._id is being assigned an id from uuidv4()
    bounties.push(newBounty) //pushing newBoundy with an Id to bounties data array
    res.send(newBounty) //response is being sent which is the newBouty
})

//express delete request to delete data
bountyRouter.delete('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId //assigning bountyId to bountyId which comes from the request body's params
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId) // finding the index of bounty
    bounties.splice(bountyIndex, 1) //splicing out the bounty and the bountyIndex 
    res.send('Successfully deleted bounty')
})

//express put request to change data
bountyRouter.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId //assigning bountyId to bountyId which comes from the request body's params
    const updatedObject = req.body //variable being assigned the request body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId) //finding the index as stated above
    const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject) // Object.assign(target, ...sources) target - what to apply the sources properties too. source- object containing the properites you want to apply --MDN. in this case bouties we are targeting at [bounty index] and updating it with updated object
    res.send(updatedBounty)
})

module.exports = bountyRouter
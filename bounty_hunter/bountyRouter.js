const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')


const bounties = [
    {
        firstName: 'Crazy',
        lastName: 'Killer',
        isLiving: true,
        bountyAmount: 100,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Hidden',
        lastName: 'Slayer',
        isLiving: true,
        bountyAmount: 500,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: `Wish'd`,
        lastName: `i-didn't-die`,
        isLiving: false,
        bountyAmount: 0,
        type: 'Jedi',
        _id: uuidv4()
    }
]


bountyRouter.get('/', (req, res) => {
    res.send(bounties)
})

bountyRouter.get('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

bountyRouter.post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`You have a new bounty ${newBounty.firstName} ${newBounty.lastName}. They are a ${newBounty.type} with an award amount of $${newBounty.bountyAmount}`)
})

bountyRouter.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const updatedObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject)
    res.send(updatedBounty)
})

bountyRouter.delete('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send('You have deleted a bounty')
})

module.exports = bountyRouter
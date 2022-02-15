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
    }
]


bountyRouter.get('/', (req, res) => {
    res.send(bounties)
})

bountyRouter.post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`You have a new bounty ${newBounty.firstName} ${newBounty.lastName}. They are a ${newBounty.type} with an award amount of $${newBounty.bountyAmount}`)
})


module.exports = bountyRouter
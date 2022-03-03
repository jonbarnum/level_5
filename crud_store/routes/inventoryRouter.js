const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')

inventoryRouter.get('/', (req, res, next) => {
    Inventory.find((error, inventory) => {
        if(error){
            res.status(500)
            return next(error)
        }
        return res.status(200).send(inventory)
    })
})

inventoryRouter.get('/:inventoryId', (req, res, next) => {
    Inventory.findOne({_id: req.params.inventoryId}, (error, inventoryId) => {
        if(error){
            res.send(500)
            return next(error)
        }
        return res.status(200).send(inventoryId)
    })
})

inventoryRouter.post('/', (req, res, next) => {
    const newInvetory = new Inventory(req.body)
    newInvetory.save((error, savedInvetory) => {
        if(error){
            res.status(500)
            return next(error)
        }
        return res.status(201).send(savedInvetory)
    })
})

inventoryRouter.delete('/:inventoryId', (req, res, next) => {
    Inventory.findOneAndDelete({_id: req.params.inventoryId}, (error, deletedItem) => {
        if(error){
            res.status(500)
            return next(error)
        }
        return res.status(200).send(`You have successfully deleted ${deletedItem.title} from your inventory`)
    })
})

inventoryRouter.put('/:inventoryId', (req, res, next) => {
    Inventory.findByIdAndUpdate(
        {_id: req.params.inventoryId},
        req.body,
        {new: true},
        (error, updatedInventory) => {
            if(error){
                res.status(500)
                return next(error)
            }
            return res.status(201).send(updatedInventory)
        }
    )
})

module.exports = inventoryRouter
const express = require('express')
const appRouter = express.Router()


appRouter.use('/', (req, res, next) => {
    console.log('The soccer teams middleware was executed')
    next()
})

appRouter.use('/', (req, res, next) => {
    req.body = {name: 'Southampton'}
    next()
})

appRouter.use('/', (req, res, next) => {
    console.log('Get request received')
    res.send(req.body)
})

module.exports = appRouter
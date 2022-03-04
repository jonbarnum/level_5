const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 8000
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/test-db', () => console.log('connected to database'))

app.use('/bounties', require('../routes/bountyRouter.js'))

app.use((error, req, res, next) => {
    console.log(error)
    return res.send({errorMessage: error.message})
})

app.listen(port, () => {
    console.log(`listen on port ${port}`)
})
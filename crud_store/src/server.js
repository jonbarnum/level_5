const express = require('express')
const app =express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/test-db', () => console.log('connected to database'))

app.use('/inventory', require('../routes/inventoryRouter.js'))

app.use((error, req, res, next) => {
    console.log(error)
    return res.send({errorMessage: error.message})
})

app.listen(8000, () => {
    console.log('server is running on port 8000')
})


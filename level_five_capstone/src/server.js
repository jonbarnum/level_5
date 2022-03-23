const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/test-db", () => console.log('connected to database'))

app.use('/bands', require('../routes/bandRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log('server running on port 8000')
})

// http://192.168.12.241:8000 on local network ip address
// http://0.0.0.0:8000 local network maps to this
// http://127.0.0.1:8000 local host
// http://localhost:8000 host file
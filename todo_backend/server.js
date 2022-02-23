const express = require('express')
const app = express()

app.use(express.json())

app.use('/todoItems', require('./routes/todoRouter.js'))

app.listen(8000, () => {
    console.log('server is running on port 8000')
})
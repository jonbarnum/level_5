const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 8000

app.use(express.json())
app.use(morgan('dev'))

app.use('/bounties', require('../routes/bountyRouter.js'))

app.listen(port, () => {
    console.log(`listen on port ${port}`)
})
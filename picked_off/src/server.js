const express = require('express')
const app = express()

app.use(express.json())

app.use('/soccerTeams', require('../routes/appRouter.js'))

app.listen(8000, () => {
    console.log('running server on port 8000')
})


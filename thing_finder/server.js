const express = require('express')
const app = express()


app.use(express.json()) 

app.use('/inventoryItems', require('./inventoryRouter.js'))

app.listen(8000, () => {
    console.log('server 8000 running')
})
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Band Blueprint
const bandSchema = new Schema({
    artist: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Band', bandSchema)
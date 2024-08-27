const mongoose = require('mongoose')

const pokemonSchema = mongoose.Schema({
    name: { type: String },
    image: { type: String },
    types: {type: Array},
    weight: {type: Number},
    height: { type: Number },
    id: {type: Number },
})
module.exports = mongoose.model('Pokemon', pokemonSchema)
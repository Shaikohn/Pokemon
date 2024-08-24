const express = require('express')
const { getPokemons, getPokemonByName } = require('../controllers/pokemonesControllers')

const router = express.Router()

router.get("/", getPokemons)
router.get("/:name", getPokemonByName)

module.exports = router 
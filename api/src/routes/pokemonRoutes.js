const express = require('express')
const { getPokemons, getPokemonByName } = require('../controllers/pokemonsControllers')

const router = express.Router()

router.get("/", getPokemons)
router.get("/:name", getPokemonByName)

module.exports = router 
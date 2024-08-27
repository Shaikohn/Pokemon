const express = require('express')
const { getPokemons, getPokemonByName, getPokemonsToDatabase } = require('../controllers/pokemonsControllers')

const router = express.Router()

router.get("/database", getPokemonsToDatabase)
router.get("/", getPokemons)
router.get("/:name", getPokemonByName)

module.exports = router 
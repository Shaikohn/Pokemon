const express = require('express')
const { getPokemonsForHigherOrLower, getPokemonsForWhoIsThatPokemon } = require('../controllers/gamesControllers')

const router = express.Router()

router.get("/higherOrLower", getPokemonsForHigherOrLower)
router.get("/:whoIsThatPokemon", getPokemonsForWhoIsThatPokemon)

module.exports = router 
const { default: axios } = require("axios")
const { API_URL } = process.env
const Pokemon = require("../models/pokemon")

const getPokemonsForWhoIsThatPokemon = async(req, res) => {
    try {
        let pokemons = await Pokemon.find({})
        
        for(let i = 0; i < pokemons.length; i++) {
            pokemons[i] = {
                name: pokemons[i].name,
                image: pokemons[i].image,
            }
        }

        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }

        shuffleArray(pokemons)

        res.status(200).json(pokemons)
    } catch(e) {
        res.status(500).json({msg: String(e)})
    }
}

const getPokemonsForHigherOrLower = async(req, res) => {
    try {
        let pokemons = await Pokemon.find({})

        for(let i = 0; i < pokemons.length; i++) {
            pokemons[i] = {
                name: pokemons[i].name,
                image: pokemons[i].image,
                weight: pokemons[i].weight / 10,
                height: pokemons[i].height / 10,
                id: pokemons[i].id,
            }
        }

        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }

        shuffleArray(pokemons)

        res.status(200).json(pokemons)
    } catch(e) {
        res.status(500).json({msg: String(e)})
    }
}

module.exports = {
    getPokemonsForWhoIsThatPokemon,
    getPokemonsForHigherOrLower,
}
const { default: axios } = require("axios")
const { API_URL } = process.env
const Pokemon = require("../models/pokemon")

const getPokemonsToDatabase = async(req, res) => {
    try {
        let pokemons = await(axios.get(`${API_URL}/pokemon?offset=1015&limit=10`))
        
        let pokemonsData = pokemons.data.results
        let pokemonFilteredData = []
        for(let i = 0; i < pokemonsData.length; i++) {
            let pokemon = await (axios.get(`${API_URL}/pokemon/${pokemonsData[i].name}`)) 
            let pokemonForm = await(axios.get(`${API_URL}/pokemon-form/${pokemon.data.id}`))
            let pokemonSprite = pokemonForm.data.sprites.front_default
            let types = pokemon.data.types
    
            for(let i = 0; i < types.length; i++) {
                types[i] = types[i].type.name
            }

            pokemonsData[i] = {
                name: pokemonsData[i].name,
                image: pokemonSprite,
                types,
                weight: pokemon.data.weight / 10,
                height: pokemon.data.height / 10,
                id: pokemon.data.id
            }
            const newPokemon = new Pokemon(pokemonsData[i])
            newPokemon.save()
            pokemonFilteredData.push(pokemonsData[i])
        }
        res.status(200).json(pokemonFilteredData)
    } catch(e) {
        res.status(500).json({msg: String(e)})
    }
}

const getPokemons = async(req, res) => {
    try {
        let pokemons = await Pokemon.find({})

        for(let i = 0; i < pokemons.length; i++) {
            pokemons[i] = {
                name: pokemons[i].name,
                image: pokemons[i].image,
            }
        }
        res.status(200).json(pokemons)
    } catch(e) {
        res.status(500).json({msg: String(e)})
    }
}

const getPokemonByName = async(req, res) => {
    const { name } = req.params
    try {
        let pokemon = await Pokemon.find({name: { $in: name }}) 
        res.status(200).json(pokemon)
    } catch(e) {
        res.status(500).json({msg: String(e)})
    }
}

module.exports = {
    getPokemonsToDatabase,
    getPokemons,
    getPokemonByName
}
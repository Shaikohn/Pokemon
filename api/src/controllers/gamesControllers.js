const { default: axios } = require("axios")
const { API_URL } = process.env

const getPokemonsForWhoIsThatPokemon = async(req, res) => {
    try {
        let pokemons = await(axios.get(`${API_URL}/pokemon/?limit=1302`))
        
        let pokemonsData = pokemons.data.results
        let pokemonFilteredData = []
        for(let i = 0; i < pokemonsData.length; i++) {
            let pokemonForm = await(axios.get(`${API_URL}/pokemon-form/${pokemonsData[i].name}`))
            let pokemonSprite = pokemonForm.data.sprites.front_default
            pokemonsData[i] = {
                name: pokemonsData[i].name,
                image: pokemonSprite,
            }
            pokemonFilteredData.push(pokemonsData[i])
        }

        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }

        shuffleArray(pokemonsData)

        res.status(200).json(pokemonsData)
    } catch(e) {
        res.status(500).json({msg: String(e)})
    }
}

const getPokemonsForHigherOrLower = async(req, res) => {
    try {
        let pokemons = await(axios.get(`${API_URL}/pokemon/?limit=1302`))
        
        let pokemonsData = pokemons.data.results
        let pokemonFilteredData = []
        for(let i = 0; i < pokemonsData.length; i++) {
            let pokemonForm = await(axios.get(`${API_URL}/pokemon-form/${pokemonsData[i].name}`))
            let pokemonSprite = pokemonForm.data.sprites.front_default
            pokemonsData[i] = {
                name: pokemonsData[i].name,
                image: pokemonSprite,
                weight: `${pokemonsData[i].weight / 10} kilograms `,
                height: `${pokemonsData[i].height / 10} meters `,
                id: pokemonsData[i].id,
            }
            pokemonFilteredData.push(pokemonsData[i])
        }

        function shuffleArray(q){
            q.sort(()=> Math.random() - 0.5);
        }

        shuffleArray(pokemonsData)

        res.status(200).json(pokemonsData)
    } catch(e) {
        res.status(500).json({msg: String(e)})
    }
}

module.exports = {
    getPokemonsForWhoIsThatPokemon,
    getPokemonsForHigherOrLower,
}
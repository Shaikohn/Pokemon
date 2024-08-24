import axios from "axios";
import { getAllPokemons, getPokemonDetails } from "../slices/pokemonSlice";

export const getPokemons = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/pokemons')
        dispatch(getAllPokemons(data))
    }
    catch(e) {
        console.log(e)
    }
}

export const getDetails = (name) => async(dispatch) => {
    try {
        const { data } = await axios.get(`/pokemons/${name}`)
        dispatch(getPokemonDetails(data))
    }
    catch(e) {
        console.log(e)
    }
}
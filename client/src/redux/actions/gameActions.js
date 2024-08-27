import axios from "axios";
import { getHigherOrLowerPokemons, getWhoIsThatPokemonPokemons } from "../slices/gameSlice";

export const getHigherOrLower = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/games/higherOrLower')
        dispatch(getHigherOrLowerPokemons(data))
    }
    catch(e) {
        console.log(e)
    }
}

export const getWhoIsThatPokemon = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/games/whoIsThatPokemon')
        console.log(data)
        dispatch(getWhoIsThatPokemonPokemons(data))
    }
    catch(e) {
        console.log(e)
    }
}
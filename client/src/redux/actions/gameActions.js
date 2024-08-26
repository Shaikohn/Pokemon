import axios from "axios";
import { gethigherOrLowerPokemons, getWhoIsThatPokemonPokemons } from "../slices/gameSlice";

export const getHigherOrLower = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/higherOrLower')
        dispatch(gethigherOrLowerPokemons(data))
    }
    catch(e) {
        console.log(e)
    }
}

export const getWhoIsThatPokemon = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/whoIsThatPokemon')
        dispatch(getWhoIsThatPokemonPokemons(data))
    }
    catch(e) {
        console.log(e)
    }
}
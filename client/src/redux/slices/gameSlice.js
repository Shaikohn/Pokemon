import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: "games",
    initialState: {
        higherOrLowerPokemons: [],
        whoIsThatPokemonPokemons: [],
    },
    reducers: {
        getHigherOrLowerPokemons: (state, action) => {
            state.higherOrLowerPokemons = action.payload
        },
        getWhoIsThatPokemonPokemons: (state, action) => {
            state.whoIsThatPokemonPokemons = action.payload
        },
    }
})

export const { getHigherOrLowerPokemons, getWhoIsThatPokemonPokemons } = gameSlice.actions
export default gameSlice.reducer
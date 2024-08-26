import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: "games",
    initialState: {
        higherOrLowerPokemons: [],
        WhoIsThatPokemonPokemons: {},
    },
    reducers: {
        gethigherOrLowerPokemons: (state, action) => {
            state.higherOrLowerPokemons = action.payload
        },
        getWhoIsThatPokemonPokemons: (state, action) => {
            state.WhoIsThatPokemonPokemons = action.payload
        },
    }
})

export const { gethigherOrLowerPokemons, getWhoIsThatPokemonPokemons } = gameSlice.actions
export default gameSlice.reducer
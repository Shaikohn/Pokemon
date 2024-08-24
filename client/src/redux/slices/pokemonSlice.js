import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: "pokemons",
    initialState: {
        allPokemons: [],
        pokemonDetails: {},
    },
    reducers: {
        getAllPokemons: (state, action) => {
            state.allPokemons = action.payload
        },
        getPokemonDetails: (state, action) => {
            state.pokemonDetails = action.payload
        },
    }
})

export const { getAllPokemons, getPokemonDetails } = pokemonSlice.actions
export default pokemonSlice.reducer
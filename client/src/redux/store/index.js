import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../slices/pokemonSlice";
import gameSlice from "../slices/gameSlice";

export default configureStore({
    reducer: {
        pokemons: pokemonSlice,
        games: gameSlice,
    }
})
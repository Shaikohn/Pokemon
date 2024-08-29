import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import HigherOrLower from './pages/HigherOrLower/HigherOrLower';
import WhoIsThatPokemon from './pages/WhoIsThatPokemon/WhoIsThatPokemon';
import NavBar from './components/NavBar/NavBar';
import Pokemons from './pages/Pokemons/Pokemons';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/pokemons' element={<Pokemons />} />
        <Route exact path='/pokemons/pokemon/:name' element={<PokemonDetails />} />
        <Route exact path='/HigherOrLower' element={<HigherOrLower />} />
        <Route exact path='/WhoIsThatPokemon' element={<WhoIsThatPokemon />} />
      </Routes>
    </>
  )
}

export default App

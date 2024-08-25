import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import HigherOrLower from './pages/HigherOrLower/HigherOrLower';
import WhoIsThatPokemon from './pages/WhoIsThatPokemon/WhoIsThatPokemon';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/HigherOrLower' element={<HigherOrLower />} />
        <Route exact path='/WhoIsThatPokemon' element={<WhoIsThatPokemon />} />
      </Routes>
    </>
  )
}

export default App

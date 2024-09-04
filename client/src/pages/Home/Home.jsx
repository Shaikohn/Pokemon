import { Link } from 'react-router-dom'
import './Home.css'
import MobileHome from './MobileHome'

const Home = () => {
  return (
    <div>
      <div className='mobile-only'>
        <MobileHome />
      </div>
      <div className='homeContainer pc-only'>
        <h1 style={{color: 'red'}}>POKESHAI</h1>
        <Link to='/pokemons'>
          <div className='titlesContainer'>
            <h1>POKEMONS</h1>
            <p className='description'>Here you can search all the pokemons!</p>
          </div>
        </Link>
        <Link to='/whoIsThatPokemon'>
          <div className='titlesContainer'>
            <h1>WHO IS THAT POKEMON?</h1>
            <p className='description'>Here you can play the famous game of the anime!</p>
          </div>
        </Link>
        <Link to='/higherOrLower'>
          <div className='titlesContainer'>
            <h1>HIGHER OR LOWER?</h1>
            <p className='description'>Here you can play Higher Or Lower adapted to Pokemon!</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
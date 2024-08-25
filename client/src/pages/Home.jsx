import NavBar from '../components/NavBar/NavBar'
import './Home.css'

const Home = () => {
  return (
    <div>
        <NavBar />
        <div className='homeContainer'>
            <h1 style={{color: 'red'}}>Shai's PokeProject</h1>
            <div className='titlesContainer'>
                <h1>POKEMONS</h1>
                <p className='description'>Here you can see INFO about all the pokemons!</p>
            </div>
            <div className='titlesContainer'>
                <h1>WHO IS THAT POKEMON?</h1>
                <p className='description'>Here you can play the famous game of the anime</p>
            </div>
            <div className='titlesContainer'>
                <h1>HIGHER OR LOWER?</h1>
                <p className='description'>Here you can play the famous game of Higher Or Lower adapted to the Pokemon World!</p>
            </div>
        </div>
    </div>
  )
}

export default Home
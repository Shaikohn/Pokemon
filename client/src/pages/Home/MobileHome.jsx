import React from 'react'
import { Link } from 'react-router-dom'
import'./MobileHome.css'

const MobileHome = () => {
  return (
    <div className='mobileHomeContainer'>
        <h1 style={{color: 'red'}}>POKESHAI</h1>
        <Link to='/pokemons'>
          <div className='mobileTitlesContainer'>
            <h1 style={{fontSize: '2.5em'}}>POKEMONS</h1>
            <p className='mobileDescription'>Here you can search all the pokemons!</p>
          </div>
        </Link>
        <Link to='/whoIsThatPokemon'>
          <div className='mobileTitlesContainer'>
            <h1 style={{fontSize: '2.5em'}}>WHO IS THAT POKEMON?</h1>
            <p className='mobileDescription'>Here you can play the famous game of the anime!</p>
          </div>
        </Link>
        <Link to='/higherOrLower'>
          <div className='mobileTitlesContainer'>
            <h1 style={{fontSize: '2.5em'}}>HIGHER OR LOWER?</h1>
            <p className='mobileDescription'>Here you can play Higher Or Lower adapted to Pokemon!</p>
          </div>
        </Link>
      </div>
  )
}

export default MobileHome
import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navContainer'>
        <Link className='links' to='/pokemons'>POKEMONS</Link>
        <Link className='links' to='/whoIsThatPokemon'>WHO IS THAT POKEMON?</Link>
        <Link className='links' to='/higherOrLower'>HIGHER OR LOWER?</Link>
    </div>
  )
}

export default NavBar
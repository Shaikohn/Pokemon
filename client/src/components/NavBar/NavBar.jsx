import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import MobileNavbar from './MobileNavbar'

const NavBar = () => {
  return (
    <div>
      <div className='mobile-only'>
        <MobileNavbar />
      </div>
      <div className='navContainer navBar-pc'>
        <Link className='links' to='/'>HOME</Link>
        <Link className='links' to='/pokemons'>POKEMONS</Link>
        <Link className='links' to='/whoIsThatPokemon'>WHO IS THAT POKEMON?</Link>
        <Link className='links' to='/higherOrLower'>HIGHER OR LOWER?</Link>
      </div>
    </div>
  )
}

export default NavBar
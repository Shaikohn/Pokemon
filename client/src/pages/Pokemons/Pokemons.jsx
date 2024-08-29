import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from '../../redux/actions/pokemonActions';
import './Pokemons.css'
import pokeball from '../../assets/Pokeball.png'
import { Link } from 'react-router-dom'

const Pokemons = () => {

    const { allPokemons } = useSelector(state => state.pokemons)
    const dispatch = useDispatch()

    useEffect(() => {
		dispatch(getPokemons())
	}, [dispatch])

    return (
        <div className='pokemonsContainer'>
            {
                allPokemons.length > 0 ?
                allPokemons.map((p, i) => {
                    return (
                        <Link to={`pokemon/${p.name}`} key={i}>
                        <div className='pokemonContainer'>
                            <img className='pokemonImage' src={p.image} />
                            <p style={{color: 'black'}}> {p.name} </p>
                        </div>
                        </Link>
                    )
                }) : <img className='pokeballImage' src={pokeball} />
            }
        </div>
    )
}

export default Pokemons
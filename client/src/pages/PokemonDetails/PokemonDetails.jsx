import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { getDetails } from '../../redux/actions/pokemonActions';
import { clearPokemonDetails } from '../../redux/slices/pokemonSlice';
import './PokemonDetails.css'
import MobilePokemonDetails from './MobilePokemonDetails'
import pokeball from '../../assets/Pokeball.png'

const PokemonDetails = () => {

    const { name } = useParams()
    const dispatch = useDispatch()

    const {pokemonDetails} = useSelector((state) => state.pokemons) 

    useEffect(() => {
        dispatch(clearPokemonDetails())
        dispatch(getDetails(name))
    }, [dispatch, name])

    return (
        <div>
            <div className='mobile-only'>
                <MobilePokemonDetails />
            </div>
            <div className='detailsContainer pc-only'>
                {
                    Object.keys(pokemonDetails).length > 0 ?
                    <div>
                        <h1 className='pokeName'> {pokemonDetails.name} </h1>
                <div className='infoContainer'>
                    <img className='pokeImage' src={pokemonDetails.image} />
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <div>
                            <p> HEIGHT </p>
                            <p> {pokemonDetails.height} meters </p>
                        </div>
                        <div>
                            <p> WEIGHT </p>
                            <p> {pokemonDetails.weight} kilograms </p>
                        </div>
                    </div>
                    <p>TYPES</p>
                    <div style={{display:'flex', justifyContent: 'space-around'}}>
                    {
                    pokemonDetails.types?.map((t, i) => {
                        return(
                            <p key={i}> {t} </p>
                        )
                        })
                    }    
                    </div>
                </div>
                    </div> : <img className='detailsPokeballImage' src={pokeball} />
                }
            </div>
        </div>
    )
}

export default PokemonDetails
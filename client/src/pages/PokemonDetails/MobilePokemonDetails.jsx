import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { getDetails } from '../../redux/actions/pokemonActions';
import { clearPokemonDetails } from '../../redux/slices/pokemonSlice';
import './MobilePokemonDetails.css'
import pokeball from '../../assets/Pokeball.png'

const MobilePokemonDetails = () => {

    const { name } = useParams()
    const dispatch = useDispatch()

    const {pokemonDetails} = useSelector((state) => state.pokemons) 

    useEffect(() => {
        dispatch(getDetails(name))
    }, [dispatch, name])

    return (
      <div className='mobileDetailsContainer'>
        {
            Object.keys(pokemonDetails).length > 0 ?
            <div>
                <h1 className='mobilePokeName'> {pokemonDetails.name} </h1>
                <div className='infoContainer'>
                    <img className='pokeImage' src={pokemonDetails.image} />
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <div>
                            <p className='mobileInfoText'> HEIGHT </p>
                            <p className='mobileInfoText'> {pokemonDetails.height} meters </p>
                        </div>
                        <div>
                            <p className='mobileInfoText'> WEIGHT </p>
                            <p className='mobileInfoText'> {pokemonDetails.weight} kilograms </p>
                        </div>
                    </div>
                    <p className='mobileInfoText'>TYPES</p>
                    <div style={{display:'flex', justifyContent: 'space-around'}}>
                    {
                    pokemonDetails.types?.map((t, i) => {
                    return(
                        <p className='mobileInfoText' key={i}> {t} </p>
                    )
                    })
                    }    
                    </div>
                </div>
            </div> : <img className='mobileDetailsPokeballImage' src={pokeball} />
        }
  </div>
  )
}

export default MobilePokemonDetails
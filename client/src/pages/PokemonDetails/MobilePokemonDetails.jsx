import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { getDetails } from '../../redux/actions/pokemonActions';
import './MobilePokemonDetails.css'

const MobilePokemonDetails = () => {

    const { name } = useParams()
    const dispatch = useDispatch()

    const {pokemonDetails} = useSelector((state) => state.pokemons) 

    useEffect(() => {
        dispatch(getDetails(name))
    }, [dispatch, name])

    return (
      <div className='mobileDetailsContainer'>
        <h1 className='mobilePokeName'> {pokemonDetails.name} </h1>
        <div className='infoContainer'>
          <img className='pokeImage' src={pokemonDetails.image} />
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <div>
                  <p style={{fontSize: '20px'}}> HEIGHT </p>
                  <p style={{fontSize: '20px'}}> {pokemonDetails.height} meters </p>
              </div>
              <div>
                  <p style={{fontSize: '20px'}}> WEIGHT </p>
                  <p style={{fontSize: '20px'}}> {pokemonDetails.weight} kilograms </p>
              </div>
          </div>
          <p style={{fontSize: '20px'}}>TYPES</p>
          <div style={{display:'flex', justifyContent: 'space-around'}}>
          {
          pokemonDetails.types?.map((t, i) => {
              return(
                  <p style={{fontSize: '20px'}} key={i}> {t} </p>
              )
              })
          }    
          </div>
      </div>
  </div>
  )
}

export default MobilePokemonDetails
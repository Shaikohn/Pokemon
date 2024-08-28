import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getWhoIsThatPokemon } from '../../redux/actions/gameActions';
import './WhoIsThatPokemon.css'

const WhoIsThatPokemon = () => {

  const { whoIsThatPokemonPokemons } = useSelector(state => state.games)
  const [pokemon, setPokemon] = useState(null)
  const [index, setIndex] = useState(0)
  const [status, setStatus] = useState(null)
  const [points, setPoints] = useState(0)
  const [input, setInput] = useState('')
	const dispatch = useDispatch()

  if(whoIsThatPokemonPokemons.length > 0 && pokemon === null) {
    setPokemon(whoIsThatPokemonPokemons[0])
  }

	useEffect(() => {
		dispatch(getWhoIsThatPokemon())
	}, [dispatch])

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const onClickSubmit = () => {
    if(pokemon.name === input) {
      setStatus('correct')
      setPoints(points + 1)
    } else {
      setStatus('incorrect')
    }
  }

  const onClickContinue = () => {
    setIndex(index + 1)
    setPokemon(whoIsThatPokemonPokemons[index])
    setStatus(null)
  }

  const onClickTryAgain = () => {
    dispatch(getWhoIsThatPokemon())
    setPokemon(whoIsThatPokemonPokemons[0])
    setPoints(0)
    setStatus(null)
  }

  return (
    <div className='whoIsThatPokemonContainer'>
      <h1>Who Is That Pokemon?</h1>
      <img className='pokemonHidden' src={pokemon?.image} />
      {
        status === null ?
        <div className='inputContainer'>
          <input onChange={handleInput} type='text' />
          <br />
          <button onClick={onClickSubmit}>SUBMIT</button>
        </div> : status === 'correct' ?
        <div>
          <p className='correctName'> {pokemon.name} </p>
          <button onClick={onClickContinue}>CONTINUE</button>
        </div> :
        <div>
          <p className='incorrectName'> {pokemon.name} </p>
          <button onClick={onClickTryAgain}>TRY AGAIN</button>
        </div>
      }
    </div>
  )
}

export default WhoIsThatPokemon
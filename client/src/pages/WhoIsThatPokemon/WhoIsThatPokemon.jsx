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
  const [difficulty, setDifficulty] = useState('easy')
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
    if(pokemon.name === input.toLowerCase()) {
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
    setDifficulty('')
  }

  const onClickSetEasy = () => {
    setDifficulty('easy')
    setStatus('ingame')
  }

  const onClickSetMedium = () => {
    setDifficulty('medium')
    setStatus('ingame')
  }

  const onClickSetHard = () => {
    setDifficulty('hard')
    setStatus('ingame')
  }

  return (
    <div className='whoIsThatPokemonContainer'>
      <h1>Who Is That Pokemon?</h1>
      {status !== null ? <img className='pokemonHidden' src={pokemon?.image} /> : ''}
      {
        status === null ? 
        <div>
          <h2>DIFFICULTY</h2>
          <button className='difficultyButton' onClick={onClickSetEasy}>EASY</button>
          <br />
          <button className='difficultyButton' onClick={onClickSetMedium}>MEDIUM</button>
          <br />
          <button className='difficultyButton' onClick={onClickSetHard}>HARD</button>
        </div>
        : status === 'ingame' ?
        <div className='inputContainer'>
          {difficulty === 'easy' ? `It has ${pokemon?.name?.length} letters and starts with ${pokemon?.name[0]}${pokemon?.name[1]}` : difficulty === 'medium' ? `It has ${pokemon?.name?.length} letters` :  ``}
          <br />
          <input className='inputName' onChange={handleInput} type='text' />
          <br />
          <button className='submitButton' onClick={onClickSubmit}>SUBMIT</button>
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
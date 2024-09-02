import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getWhoIsThatPokemon } from '../../redux/actions/gameActions';
import './WhoIsThatPokemon.css'
import WhoIsThatPokemonImage from '../../assets/WhoIsThatPokemon.png'
import MobileWhoIsThatPokemon from './MobileWhoIsThatPokemon'

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
    setStatus('ingame')
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
    <div>
      <div className='mobile-only'>
        <MobileWhoIsThatPokemon />
      </div>
    <div className='whoIsThatPokemonContainer whoIsThatPokemon-pc'>
      <div style={{display: 'block'}}>
      {status !== null ? <img className='pokemonHidden' src={pokemon?.image} /> : ''}
      {
        status === null ? 
        <div>
          <h1 style={{color: 'red'}}>DIFFICULTY</h1>
          <button style={{backgroundColor: 'green'}} className='difficultyButton' onClick={onClickSetEasy}>EASY</button>
          <br />
          <button style={{backgroundColor: 'orange'}} className='difficultyButton' onClick={onClickSetMedium}>MEDIUM</button>
          <br />
          <button style={{backgroundColor: 'red'}} className='difficultyButton' onClick={onClickSetHard}>HARD</button>
        </div>
        : status === 'ingame' ?
        <div className='inputContainer'>
          {difficulty === 'easy' ? <p style={{color: 'red', fontSize: '20px', marginBottom: '-20px'}}>It has {pokemon?.name?.length} letters and starts with {pokemon?.name[0]}{pokemon?.name[1]}</p> : difficulty === 'medium' ? <p style={{color: 'red', fontSize: '20px', marginBottom: '-20px'}}>It has {pokemon?.name?.length} letters</p> :  ``}
          <br />
          <input className='inputName' onChange={handleInput} type='text' />
          <br />
          <button className='submitButton' onClick={onClickSubmit}>SUBMIT</button>
        </div> : status === 'correct' ?
        <div>
          <p className='correctName'> {pokemon.name} </p>
          <button className='continueButton' onClick={onClickContinue}>CONTINUE</button>
        </div> :
        <div>
          <p className='incorrectName'> {pokemon.name} </p>
          <p style={{fontSize: '20px'}}> Your points: {points} </p>
          <button className='tryAgainButton' onClick={onClickTryAgain}>TRY AGAIN</button>
        </div>
      }
      </div>
      <img className='logoImage' src={WhoIsThatPokemonImage} />
    </div>
    </div>
  )
}

export default WhoIsThatPokemon
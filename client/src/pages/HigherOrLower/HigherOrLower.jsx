import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getHigherOrLower } from '../../redux/actions/gameActions';
import pokeball from '../../assets/Pokeball.png'
import './HigherOrLower.css'
import MobileHigherOrLower from './MobileHigherOrLower'

const HigherOrLower = () => {

  const { higherOrLowerPokemons } = useSelector(state => state.games)
  const [one, setOne] = useState('')
  const [two, setTwo] = useState('')
  const [hidden, setHidden] = useState(true)
  const [status, setStatus] = useState(null)
  const [points, setPoints] = useState(0)
  const [index, setIndex] = useState(1)
	const dispatch = useDispatch()

  if(one === '' && two === '' && higherOrLowerPokemons.length > 0) {
    setOne(higherOrLowerPokemons[0])
    setTwo(higherOrLowerPokemons[1])
  }

	useEffect(() => {
		dispatch(getHigherOrLower())
	}, [dispatch])

  const onClickHigher = () => {
    setHidden(false)
    if(two.id > one.id) {
      setStatus('correct')
      setPoints(points + 1)
    } else {
      setStatus('incorrect')
    }
  }

  const onClickLower = () => {
    setHidden(false)
    if(two.id < one.id) {
      setStatus('correct')
      setPoints(points + 1)
    } else {
      setStatus('incorrect')
    }
  }

  const onClickContinue = () => {
    setIndex(index + 1)
    setOne(two)
    setTwo(higherOrLowerPokemons[index])
    setHidden(true)
    setStatus(null)
  }

  const onClickTryAgain = () => {
    dispatch(getHigherOrLower())
    setOne(higherOrLowerPokemons[0])
    setTwo(higherOrLowerPokemons[1])
    setHidden(true)
    setPoints(0)
    setStatus(null)
  }

  return (
    <div>
      <div className='mobile-only'>
        <MobileHigherOrLower />
      </div>
    <div className='higherOrLowerContainer pc-only'>
      <h1><span style={{color: 'green'}}>Higher</span> Or <span style={{color: 'red'}}>Lower</span>: Pokedex Number</h1>
      {/* <h2>Pokedex Number</h2> */}
      {
        one !== '' ?
        <div className='optionsContainer'>
        <div className='optionContainer'>
          <h1> {one.name} </h1>
          <img className='optionImage' src={one.image} />
          <p> {one.id} </p>
        </div>
        <div className='optionContainer'>
          <h1> {two.name} </h1>
          <img className='optionImage' src={two.image} />
          { hidden ?
            <p> ? </p> : <p className={status === 'correct' ? 'correctAnswer' : 'incorrectAnswer'}> {two.id} </p>
          }
          {
          status === null ?
          <div>
            <button className='higherButton' onClick={onClickHigher}>HIGHER</button>
            <button className='lowerButton' onClick={onClickLower}>LOWER</button>
          </div> : status === 'correct' ?
          <button className='continueButton' onClick={onClickContinue}>CONTINUE</button> :
          <div>
            <button className='tryAgainButton' onClick={onClickTryAgain}>TRY AGAIN</button>
            <p style={{marginTop: '10px'}}>Your points: {points} </p>
          </div>
        }
        </div>
      </div>
        : <img className='pokeballImage' src={pokeball} />
      }
    </div>
    </div>
  )
}

export default HigherOrLower
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getHigherOrLower } from '../../redux/actions/gameActions';
import pokeball from '../../assets/Pokeball.png'
import './MobileHigherOrLower.css'

const MobileHigherOrLower = () => {

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
    <div className='mobileHigherOrLowerContainer'>
      <h1><span style={{color: 'green'}}>Higher</span> Or <span style={{color: 'red'}}>Lower</span>: Pokedex Number</h1>
      {/* <h2>Pokedex Number</h2> */}
      {
        one !== '' ?
        <div className='mobileOptionsContainer'>
        <div className='mobileOptionContainer'>
          <h1> {one.name} </h1>
          <img className='optionImage' src={one.image} />
          <p style={{fontSize: '30px'}}> {one.id} </p>
        </div>
        <div className='mobileOptionContainer'>
          <h1> {two.name} </h1>
          <img className='optionImage' src={two.image} />
          { hidden ?
            <p style={{fontSize: '30px'}}> ? </p> : <p style={{fontSize: '30px'}} className={status === 'correct' ? 'correctAnswer' : 'incorrectAnswer'}> {two.id} </p>
          }
          {
          status === null ?
          <div>
            <button className='mobileHigherButton' onClick={onClickHigher}>HIGHER</button>
            <button className='mobileLowerButton' onClick={onClickLower}>LOWER</button>
          </div> : status === 'correct' ?
          <button className='mobileContinueButton' onClick={onClickContinue}>CONTINUE</button> :
          <div>
            <button className='mobileTryAgainButton' onClick={onClickTryAgain}>TRY AGAIN</button>
            <p style={{fontSize: '30px', marginTop: '10px'}}>Your points: {points} </p>
          </div>
        }
        </div>
      </div>
        : <img className='mobileHigherOrLowerPokeball' src={pokeball} />
      }
    </div>
  )
}

export default MobileHigherOrLower
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getWhoIsThatPokemon } from '../../redux/actions/gameActions';

const WhoIsThatPokemon = () => {

  const { whoIsThatPokemonPokemons } = useSelector(state => state.games)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getWhoIsThatPokemon())
	}, [dispatch])

  console.log(whoIsThatPokemonPokemons)

  return (
    <div>
        <h1>Who Is That Pokemon?</h1>
    </div>
  )
}

export default WhoIsThatPokemon
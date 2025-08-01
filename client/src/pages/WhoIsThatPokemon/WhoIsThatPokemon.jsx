import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getWhoIsThatPokemon } from '../../redux/actions/gameActions';
import WhoIsThatPokemonImage from '../../assets/WhoIsThatPokemon.png'
import pokeball from '../../assets/Pokeball.png'

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
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center text-center px-4 py-10 relative">
            {whoIsThatPokemonPokemons.length > 0 ? (
                <div className="p-6 sm:p-10 w-full max-w-xl animate-fade-in relative z-10">
                    <div className="flex justify-center mb-4">
                        <img src={WhoIsThatPokemonImage} alt="Who is that Pokémon?" className="w-80" />
                    </div>
                    <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-slate-700 to-blue-500 text-transparent bg-clip-text tracking-wide uppercase">
                        Who's That Pokémon?
                    </h1>
                    <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-5">Guess the name of the hidden Pokémon based on its image and clues. Select a difficulty to begin!</p>
                        {status !== null && (
                            <img
                                className="mx-auto w-36 h-36 object-contain"
                                src={pokemon?.image}
                                alt="Hidden Pokémon"
                            />
                        )}
                        {status === null && (
                            <div>
                                <h2 className="text-2xl font-bold text-red-600 mb-4">DIFFICULTY</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <button
                                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition"
                                        onClick={onClickSetEasy}
                                    >
                                        EASY
                                    </button>
                                    <button
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md transition"
                                        onClick={onClickSetMedium}
                                    >
                                        MEDIUM
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition"
                                        onClick={onClickSetHard}
                                    >
                                        HARD
                                    </button>
                                </div>
                            </div>
                        )}
                        {status === 'ingame' && (
                            <div className="mt-6">
                                <p className="text-red-600 font-semibold text-lg mb-4">
                                    {difficulty === 'easy'
                                        ? `It has ${pokemon?.name?.length} letters and starts with ${pokemon?.name[0]}${pokemon?.name[1]}`
                                        : difficulty === 'medium'
                                        ? `It has ${pokemon?.name?.length} letters`
                                        : ''
                                    }
                                </p>
                                <input
                                    type="text"
                                    onChange={handleInput}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                                />
                                <button
                                    onClick={onClickSubmit}
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        )}
                        {status === 'correct' && (
                            <div className="mt-6">
                                <h2 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-green-700 to-green-400 text-transparent bg-clip-text tracking-wide uppercase">{pokemon.name}</h2>
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition"
                                    onClick={onClickContinue}
                                >
                                    CONTINUE
                                </button>
                            </div>
                        )}
                        {status === 'incorrect' && (
                            <div className="mt-6">
                                <h2 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-red-700 to-red-400 text-transparent bg-clip-text tracking-wide uppercase">{pokemon.name}</h2>
                                <p className="text-gray-700 mb-4">Your points: {points}</p>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md transition"
                                    onClick={onClickTryAgain}
                                >
                                    TRY AGAIN
                                </button>
                            </div>
                        )}
                </div>
            ) : (
                <img src={pokeball} alt="Loading" className="w-24 h-24 animate-spin" />
            )}
        </div>
    )
}

export default WhoIsThatPokemon
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getHigherOrLower } from '../../redux/actions/gameActions';
import pokeball from '../../assets/Pokeball.png'

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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center px-4 py-10">
        {one !== '' ? (
            <div className="p-8 sm:p-12 w-full max-w-5xl animate-fade-in text-center space-y-10">
                <div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
                        <span className="text-green-600">Higher</span> or <span className="text-red-500">Lower</span>
                    </h1>
                    <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
                        Decide if the second Pokemon has a higher or lower Pokedex number than the first one.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center justify-center">
                    <div className="bg-white border border-slate-300 rounded-xl shadow-md p-6 sm:p-8 transition hover:scale-[1.02]">
                        <h2 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-yellow-600 to-yellow-300 text-transparent bg-clip-text tracking-wide uppercase">
                            {one.name}
                        </h2>
                        <img src={one.image} alt={one.name} className="w-36 h-36 mx-auto mb-4" />
                        <p className="text-gray-700 font-mono text-lg">#{one.id}</p>
                    </div>
                    <div className="bg-white border border-slate-300 rounded-xl shadow-md p-6 sm:p-8 transition hover:scale-[1.02] flex flex-col items-center">
                        <h2 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-yellow-600 to-yellow-300 text-transparent bg-clip-text tracking-wide uppercase">
                            {two.name}
                        </h2>
                        <img src={two.image} alt={two.name} className="w-36 h-36 mx-auto mb-4" />
                        <p className={`text-lg font-mono ${
                            status === 'correct' ? 'text-green-600' :
                            status === 'incorrect' ? 'text-red-500' :
                            'text-gray-700'
                            }`}>
                            {hidden ? '?' : `#${two.id}`}
                        </p>
                        <div className="mt-4 w-full flex flex-col items-center gap-3">
                            {status === null && (
                                <div className="flex flex-col sm:flex-row gap-3 w-full">
                                    <button
                                        className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
                                        onClick={onClickHigher}
                                    >
                                        HIGHER
                                    </button>
                                    <button
                                        className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
                                        onClick={onClickLower}
                                    >
                                        LOWER
                                    </button>
                                </div>
                            )}
                            {status === 'correct' && (
                                <button
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
                                    onClick={onClickContinue}
                                >
                                    CONTINUE
                                </button>
                            )}
                            {status === 'incorrect' && (
                                <div className="flex flex-col items-center w-full">
                                    <button
                                        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
                                        onClick={onClickTryAgain}
                                    >
                                        TRY AGAIN
                                    </button>
                                    <p className="text-gray-700 mt-3">Your points: {points}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <img src={pokeball} alt="Loading" className="w-20 h-20 animate-spin" />
        )}
    </div>
  )
}

export default HigherOrLower
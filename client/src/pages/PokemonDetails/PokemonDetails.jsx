import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { getDetails } from '../../redux/actions/pokemonActions';
import { clearPokemonDetails } from '../../redux/slices/pokemonSlice';
import pokeball from '../../assets/Pokeball.png'

const PokemonDetails = () => {

    const { name } = useParams()
    const dispatch = useDispatch()

    const {pokemonDetails} = useSelector((state) => state.pokemons) 

    useEffect(() => {
        dispatch(clearPokemonDetails())
        dispatch(getDetails(name))
    }, [dispatch, name])

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 text-gray-800">
            {Object.keys(pokemonDetails).length > 0 ? (
                <div className="w-full max-w-4xl bg-white rounded-2xl border border-gray-200 shadow-2xl p-10 animate-fadeInUp">
                    <h1 className="text-5xl font-extrabold text-center text-red-600 capitalize mb-10 tracking-wide">
                        {pokemonDetails.name}
                    </h1>
                    <div className="flex flex-col items-center mb-10">
                        <img
                            className="w-52 h-52 object-contain transition-transform duration-300 hover:scale-110"
                            src={pokemonDetails.image}
                            alt={pokemonDetails.name}
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-10">
                        <div>
                            <p className="text-lg text-gray-500 mb-1">Height</p>
                            <p className="text-2xl font-bold">{pokemonDetails.height} m</p>
                        </div>
                        <div>
                            <p className="text-lg text-gray-500 mb-1">ID</p>
                            <p className="text-2xl font-bold">#{pokemonDetails.id.toString().padStart(3, '0')}</p>
                        </div>
                        <div>
                            <p className="text-lg text-gray-500 mb-1">Weight</p>
                            <p className="text-2xl font-bold">{pokemonDetails.weight} kg</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-lg text-gray-500 mb-4">Types</p>
                        <div className="flex justify-center flex-wrap gap-4">
                            {pokemonDetails.types?.map((t, i) => (
                                <span
                                    key={i}
                                    className="px-5 py-2 bg-red-100 text-red-700 font-semibold rounded-full text-md capitalize"
                                >
                                    {t}
                                </span>
                            ))
                            }
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center">
                    <img className="w-24 h-24 animate-spin" src={pokeball} alt="Loading" />
                </div>
            )}
        </div>
    )
}

export default PokemonDetails
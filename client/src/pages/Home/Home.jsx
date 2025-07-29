import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-red-500 mb-10 tracking-wide text-center">
            POKESHAI
        </h1>
        <div className="space-y-6 w-full max-w-xl">
            <Link to="/pokemons" className="block bg-gray-800 hover:bg-gray-700 transition rounded-lg p-4 sm:p-6 shadow-md">
                <h2 className="text-xl sm:text-2xl font-semibold mb-1">POKEMONS</h2>
                <p className="text-sm sm:text-base text-gray-300">
                    Browse and search through all available Pokémon!
                </p>
            </Link>
            <Link to="/whoIsThatPokemon" className="block bg-gray-800 hover:bg-gray-700 transition rounded-lg p-4 sm:p-6 shadow-md">
                <h2 className="text-xl sm:text-2xl font-semibold mb-1">WHO IS THAT POKEMON?</h2>
                <p className="text-sm sm:text-base text-gray-300">
                    Play the iconic silhouette guessing game from the anime!
                </p>
            </Link>
            <Link to="/higherOrLower" className="block bg-gray-800 hover:bg-gray-700 transition rounded-lg p-4 sm:p-6 shadow-md">
                <h2 className="text-xl sm:text-2xl font-semibold mb-1">HIGHER OR LOWER?</h2>
                <p className="text-sm sm:text-base text-gray-300">
                    A Pokémon-themed twist on the classic Higher or Lower game!
                </p>
            </Link>
        </div>
    </div>
  )
}

export default Home
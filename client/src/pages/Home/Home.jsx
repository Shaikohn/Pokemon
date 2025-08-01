import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function Home() {

    const randomPokemonIds = useMemo(() => {
        return Array.from({ length: 3 }, () => Math.floor(Math.random() * 1000) + 1);
    }, []);

    const randomPokemonIds2 = useMemo(() => {
        return Array.from({ length: 3 }, () => Math.floor(Math.random() * 1000) + 1);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center px-4 py-10">
            <h1 className="text-6xl sm:text-7xl font-extrabold text-red-600 drop-shadow-md mb-4 text-center tracking-wider">
                POKESHAI
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-center w-full max-w-6xl">
                <div className="hidden md:flex flex-col items-center gap-6">
                    {randomPokemonIds.slice(0, 3).map((id, index) => {
                        const borderColors = ["border-red-500", "border-yellow-400", "border-blue-500"];
                        const colorClass = borderColors[index % borderColors.length];
                        return (
                            <div
                                key={id}
                                className={`w-32 h-32 rounded-full border-4 ${colorClass} bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-float`}
                                style={{ animationDelay: `${index * 0.3}s` }}
                            >
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                                    alt={`Pokemon ${id}`}
                                    className="w-20 h-20"
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="space-y-10 px-2 w-full flex flex-col items-center">
                    <Link
                        to="/pokemons"
                        className="w-full max-w-xl bg-white hover:bg-red-50 transition border-2 border-red-300 rounded-3xl p-8 shadow-xl"
                    >
                        <h2 className="text-4xl font-bold text-red-600 mb-2">POKEMONS</h2>
                        <p className="text-lg text-gray-700">
                            Browse and search through all available Pokemon!
                        </p>
                    </Link>
                    <Link
                        to="/whoIsThatPokemon"
                        className="w-full max-w-xl bg-white hover:bg-yellow-50 transition border-2 border-yellow-300 rounded-3xl p-8 shadow-xl"
                    >
                        <h2 className="text-4xl font-bold text-yellow-500 mb-2">WHO IS THAT POKEMON?</h2>
                        <p className="text-lg text-gray-700">
                            Play the iconic silhouette guessing game from the anime!
                        </p>
                    </Link>
                    <Link
                        to="/higherOrLower"
                        className="w-full max-w-xl bg-white hover:bg-blue-50 transition border-2 border-blue-300 rounded-3xl p-8 shadow-xl"
                    >
                        <h2 className="text-4xl font-bold text-blue-500 mb-2">HIGHER OR LOWER?</h2>
                        <p className="text-lg text-gray-700">
                            A Pokemon-themed twist on the classic Higher or Lower game!
                        </p>
                    </Link>
                </div>
                <div className="hidden md:flex flex-col items-center gap-6">
                    {randomPokemonIds2.slice(0, 3).map((id, index) => {
                        const borderColors = ["border-red-500", "border-yellow-400", "border-blue-500"];
                        const colorClass = borderColors[index % borderColors.length];
                        return (
                            <div
                                key={id}
                                className={`w-32 h-32 rounded-full border-4 ${colorClass} bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-float`}
                                style={{ animationDelay: `${index * 0.3}s` }}
                            >
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                                    alt={`Pokemon ${id}`}
                                    className="w-20 h-20"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
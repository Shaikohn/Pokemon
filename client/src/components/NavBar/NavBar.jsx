import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-red-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl font-bold hover:text-yellow-300 transition">
                        PokeShai
                    </Link>
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="bg-red-600 p-2 rounded-md focus:outline-none"
                        >
                            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex gap-10 text-lg">
                        <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
                        <Link to="/pokemons" className="hover:text-yellow-300 transition">Pokémons</Link>
                        <Link to="/whoIsThatPokemon" className="hover:text-yellow-300 transition">Who's That Pokémon?</Link>
                        <Link to="/higherOrLower" className="hover:text-yellow-300 transition">Higher or Lower?</Link>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-red-600 text-white px-4 pb-4 space-y-2">
                    <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">Home</Link>
                    <Link to="/pokemons" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">Pokémons</Link>
                    <Link to="/whoIsThatPokemon" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">Who's That Pokémon?</Link>
                    <Link to="/higherOrLower" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">Higher or Lower?</Link>
                </div>
            )}
        </nav>
    );
}

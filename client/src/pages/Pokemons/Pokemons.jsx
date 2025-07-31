import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from '../../redux/actions/pokemonActions';
import './Pokemons.css'
import pokeball from '../../assets/Pokeball.png'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";

const Pokemons = () => {

    const { allPokemons } = useSelector(state => state.pokemons)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [perPage, setPerPage] = useState(20)
    let filteredPokemons = allPokemons.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
	      dispatch(getPokemons())
	  }, [dispatch])

    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setPerPage(perPage + 20)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [document.documentElement.scrollTop])

    const filterPokemons = () => {
        if(search.length === 0) {
            return allPokemons
        } 
        if(filteredPokemons.length === 0) {
            setSearch("")
            Swal.fire({
                title: "Error",
                text: 'Sorry, we couldnt find that pokemon',
                icon: "error",
                timer: 3000,
            });
        } 
        return filteredPokemons
    }

    function handleOnSearch(e) {
        setSearch(e.target.value)
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-6">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold text-red-600 mb-2 tracking-wide">
                    POKÉMONS
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Browse the Pokédex to see each Pokémon's number and name.
                </p>
                <input
                    type="text"
                    value={search}
                    onChange={handleOnSearch}
                    placeholder="Search Pokémon"
                    className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-red-500 mb-8"
                />
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {
                    allPokemons.length > 0 ? (
                        filterPokemons()
                            .slice(0, perPage)
                            .map((p, i) => (
                                <Link to={`pokemon/${p.name}`} key={i}>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1 flex flex-col items-center text-center">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-20 h-20 object-contain mb-3 transition-transform duration-200 hover:scale-105"
                                        />
                                        <p className="text-sm font-medium text-gray-500 mb-1">
                                            #{p.id.toString().padStart(3, '0')}
                                        </p>
                                        <p className="text-base font-semibold capitalize text-gray-700 tracking-wide">
                                            {p.name}
                                        </p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-full flex justify-center">
                                <img src={pokeball} alt="Loading" className="w-24 h-24 animate-spin" />
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default Pokemons
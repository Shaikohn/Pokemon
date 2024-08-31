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
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(20)
    let filteredPokemons = allPokemons.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
		dispatch(getPokemons())
	}, [dispatch])

    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            /* setPage(page + 1) */
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
        <div>
            <div className='container'>
                <h1 style={{color: 'red'}}>POKEMONS</h1>
                <input className='searchInput' onChange={handleOnSearch} placeholder="Search Pokemons" type="text" value={search} />
            </div>
            <div className='pokemonsContainer'>
            {
                allPokemons.length > 0 ?
                filterPokemons()
                .slice(0, perPage)
                .map((p, i) => {
                    return (
                        <Link to={`pokemon/${p.name}`} key={i}>
                        <div className='pokemonContainer'>
                            <img className='pokemonImage' src={p.image} />
                            <p style={{color: 'black'}}> {p.name} </p>
                        </div>
                        </Link>
                    )
                }) : <img className='pokeballImage' src={pokeball} />
            }
            </div>
        </div>
    )
}

export default Pokemons
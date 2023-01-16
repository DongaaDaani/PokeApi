import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Search from './Search/Search.tsx';
import Welcome from './Welcome.tsx';
import { Button } from 'react-bootstrap';

export default function Main() {

    const [welcomeShow, setWelcomeShow] = useState(true)

    // One Page of Pokemons (Current page)
    const [pokemons, setPokemons] = useState([])
    const [currentPagePokemons, setCurrentPagePokemons] = useState([])

    //In the search function need to get all pokemons, not enought only one page 
    const [allPokemons, setAllPokemons] = useState([])
    const [allPokemonsUrl, setAllPokemonsUrl] = useState([])

    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextUrl, setNextUrl] = useState()
    const [prevUrl, setPrevUrl] = useState()

    const addModalClose = () => {
        setWelcomeShow(false);
        getCurrentPagePokemons();
        getSearchPokemons();
    }

    const getCurrentPagePokemons = async () => {
        const poke = await Axios.get(url)
        setPokemons(poke.data.results)
        setNextUrl(poke.data.next)
        setPrevUrl(poke.data.previous)
        setCurrentPagePokemons([])

        pokemons.map(async (item) => {
            const morePokemonDetais = await Axios.get(item.url)
            setCurrentPagePokemons(
                state => {
                    state = [...state, morePokemonDetais.data]
                    return state;
                })
        })
    }

    const getSearchPokemons = async () => {
        const full = await Axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=3000")
        setAllPokemons(full.data.results)
        setAllPokemonsUrl([])
        allPokemons.map(async (item) => {
            const morePokemonDetais = await Axios.get(item.url)
            setAllPokemonsUrl(
                state => {
                    state = [...state, morePokemonDetais.data]
                    return state;
                })
        })
    }



    useEffect(() => {
        getCurrentPagePokemons()
    }, [url]);

    useEffect(() => {
        getCurrentPagePokemons()
        getSearchPokemons()
    }, []);

    return (
        <div>


            <Welcome show={welcomeShow} onHide={addModalClose} />
            <h3>Search:</h3>
            <Search fullPoke={allPokemonsUrl} details={currentPagePokemons} />
            <br />
            <div className='d-flex justify-content-center'>
                <Button variant="success" onClick={() => setUrl(prevUrl)}>Previous</Button>
                <Button variant="success" onClick={() => setUrl(nextUrl)}>Next</Button>
            </div>

        </div>
    )
}
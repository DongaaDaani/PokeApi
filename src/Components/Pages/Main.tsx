import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Search from './Search/Search.tsx';
import Welcome from './Welcome.tsx';

export default function Main(){
  
    const [addModelShow, setAddModelShow] = useState(true)
    const [pokemons, setPokemons] = useState([])
    const [pokemonsFullData, setPokemonsFullData] = useState([])
    
    const addModalClose = () =>{
        setAddModelShow(false);
        getPokemonInformation();
    } 
    
    const getPokemonInformation = async () => {
        const poke = await Axios.get("https://pokeapi.co/api/v2/pokemon/")
        setPokemons(poke.data.results)
        InitializePokemonFullData()
    }

    const InitializePokemonFullData = async () => {
        setPokemonsFullData([])
        pokemons.map(async (item) => {
           
            const morePokemonDetais = await Axios.get(item.url)
            setPokemonsFullData(
                state => {
                    state = [...state, morePokemonDetais.data]
                    return state;
                })
        })
    }

    useEffect(() => {
        getPokemonInformation()
        InitializePokemonFullData()
    }, []);

    return(
        <div>
             <Welcome show={addModelShow}  onHide={addModalClose} />
            <h3>Search:</h3>
            <Search details={pokemonsFullData}/>
        </div>
    )
}
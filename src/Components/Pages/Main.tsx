import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Search from './Search/Search.tsx';
import Welcome from './Welcome.tsx';
import { Button } from 'react-bootstrap';

export default function Main(){
  
    const [addModelShow, setAddModelShow] = useState(true)
    const [pokemons, setPokemons] = useState([])
    const [pokemonsFullData, setPokemonsFullData] = useState([])

    const [pokemonsFull,setPokemonsFull]= useState([])
    const [pokemonsFullUrl,setPokemonsFullUrl]= useState([])

    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon")
    const [nextUrl,setNextUrl]=useState()
    const [prevUrl,setPrevUrl]=useState()

    const addModalClose = () =>{
        setAddModelShow(false);
        getPokemonInformation();
        getSearchPokemons();
    } 
    
    const getPokemonInformation = async () => {
        const poke = await Axios.get(url)
        setPokemons(poke.data.results)

      //  const full =  await Axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=700")
     //   setPokemonsFull(full.data.results)
        setNextUrl(poke.data.next)
        setPrevUrl(poke.data.previous)
        InitializePokemonFullData()
    }


    const getSearchPokemons = async () => {
      

        const full =  await Axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=3000")
        setPokemonsFull(full.data.results)

        setPokemonsFullUrl([])

        pokemonsFull.map(async (item) => {
           
            const morePokemonDetais = await Axios.get(item.url)
            setPokemonsFullUrl(
                state => {
                    state = [...state, morePokemonDetais.data]
                    return state;
                })  
        })
      console.log('setPokem Full',pokemonsFullUrl)
    }

    const InitializePokemonFullData = async () => {
        setPokemonsFullData([])
      /*  setPokemonsFullUrl([])

       pokemonsFull.map(async (item) => {
           
        const morePokemonDetais = await Axios.get(item.url)
        setPokemonsFullUrl(
            state => {
                state = [...state, morePokemonDetais.data]
                return state;
            })  
    })
*/

       
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
       // getSearchPokemons()
    }, [url]);

    useEffect(() => {
        getSearchPokemons()
    }, []);

    return(
        <div>
             

             <Welcome show={addModelShow}  onHide={addModalClose} />
            <h3>Search:</h3>
            <Search fullPoke={pokemonsFullUrl} details={pokemonsFullData}/>
            <br/>
            <div  className='d-flex justify-content-center'>
            <Button variant="success" onClick={()=>setUrl(prevUrl)}>Previous</Button>
            <Button variant="success" onClick={()=>setUrl(nextUrl)}>Next</Button>
            </div>
            
        </div>
    )
}
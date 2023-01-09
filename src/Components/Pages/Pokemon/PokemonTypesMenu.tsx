import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Outlet } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Pokemon from './Pokemon.tsx';

/*
-In this Component I list to the types of pokemons.
- You can set the search types pokemon in the ListGroup section.
- After I read all pokemons using Axios, and take them a filter in the "getPokemonsByType" function.
- In this function I create "filteredPokemon" pokemons list, and display them in the render.
*/
export default function PokemonTypesMenu() {

    const [types, setTypes] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokemonsFullData, setPokemonsFullData] = useState([])
    const [selectedType, setSelectedType] = useState("")
    const [filteredPokemon, setFilteredPokemon] = useState([])


    useEffect(() => {
        getPokemonInformation()
        getTypeInformation()
        InitializePokemons()
    }, []);


    const getTypeInformation = async () => {
        const res = await Axios.get("https://pokeapi.co/api/v2/type")
        setTypes(res.data.results)
    }

    const getPokemonInformation = async () => {
        const res = await Axios.get("https://pokeapi.co/api/v2/pokemon/")
        setPokemons(res.data.results)
    }

    const InitializePokemons = async () => {
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

    const getPokemonsByType = async () => {
        setFilteredPokemon([])
        {
            pokemonsFullData.filter(filterPokemon => filterPokemon.types[0].type.name.includes(selectedType)).map(filteredName => (
                setFilteredPokemon(
                    state => {
                        state = [...state, filteredName]
                        return state;
                    })

            ))
        }
    }

    return (
        <>
            <h3>Select the type of character</h3>
            <Row>
                {types.map((e) => {
                    return (
                        <div style={{ width: '18rem' }}>
                            <ListGroup>
                                <ListGroup.Item action onClick={() => { setSelectedType(e.name); InitializePokemons(); getPokemonsByType(); }}>
                                    {e.name}
                                </ListGroup.Item>
                            </ListGroup>
                        </div>

                    );
                })}
                {filteredPokemon.map((item) => <Col md="auto"> <Pokemon item={item} /></Col>)} </Row>
            <Outlet />
        </>

    );
}

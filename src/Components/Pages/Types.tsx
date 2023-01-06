import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Outlet } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Pokemon from './Pokemon/Pokemon.tsx';

export default function Types() {

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
        console.log(filteredPokemon)
    }

    return (
        <>
      
        <h3>Select the type of character</h3>
        <Row>
            {types.map((e) => {
                return (
                    <div style={{ width: '18rem' }}>
                        
                        <ListGroup defaultActiveKey="#link1">
                            
                            <ListGroup.Item action onClick={() => { setSelectedType(e.name); InitializePokemons(); getPokemonsByType(); }}>
                                {e.name}
                            </ListGroup.Item>
                        </ListGroup>
                    </div>

                );
            })}

                {filteredPokemon.map((item) => <Col md="auto">   <Pokemon url={item.sprites.front_default} name={item.name} weight={item.weight} height={item.height} abilities={item.abilities} type={item.types} /></Col>)} </Row>
            <Outlet />
        </>

    );
}

import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import PokemonDetails from './PokemonDetails.tsx';
import AlterModal from '../AlertModal.tsx';

export default function PokemonList({ filteredPokemons }) {

    const [pokemonDetailShow, setPokemonDetailShow] = useState(false)
    const [favoriteModelShow, setFavoriteModelShow] = useState(false)

    const [selectedPokemon, setSelectedPokemon] = useState("")
    const [catchItems, setCatchItems] = useState(JSON.parse(localStorage.getItem('catchedItems')));

    const [myStyle, setMyStyle] = useState({});


    const catchPokemonModalClose = () => setFavoriteModelShow(false);
    
    const handleClick = (id) => {
        setMyStyle(prevState => ({
            ...myStyle,
            [id]: !prevState[id]
        }))
    }


    const catchPokemon = (item) => {
        let array = catchItems
        var eqaulValue = false
        array.map((arr) => {
            if (arr.name == item.name) {
                 alert('You already Catched this pokemon! You can see it in the Catch menu!')
                equalValue = true
            }
        })
        if (array && eqaulValue == false) {
            array.push(item)

            setCatchItems(array)
            localStorage.setItem('catchedItems', JSON.stringify(catchItems));
        }
    }

    const addModalClose = () => setPokemonDetailShow(false);

    return (
        <div>
            <Row>
                {filteredPokemons.map((item, i) =>
                    <Col md="auto">
                        <Card key={item.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.sprites.front_default} />
                            <Card.Body>
                            </Card.Body>
                            <Card.Title>  <h1>{item.name}</h1>
                            </Card.Title>
                            <Button onClick={() => {
                                setSelectedPokemon(item)
                                setPokemonDetailShow(true)
                            }
                            } variant="outline-primary"> See Details </Button>
                            <Button variant={myStyle[`${item.id}`]
                                ? "danger"
                                : "outline-success"
                            } onClick={() => { catchPokemon(item); setFavoriteModelShow(true); handleClick(item.id) }}>{myStyle[`${item.id}`]
                                ? "Catched"
                                : "Catch"}</Button>
                        </Card>
                    </Col>
                )}
            </Row>
            
            <PokemonDetails favoriteList={catchItems} show={pokemonDetailShow} item={selectedPokemon} onHide={addModalClose} />
            <AlterModal show={favoriteModelShow} onHide={catchPokemonModalClose} />
        </div>
    );
}


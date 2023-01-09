import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import PokemonDetails from './PokemonDetails.tsx';
import AlterModal from '../AlertModal.tsx';

export default function PokemonList({ filteredPokemons }) {

    const [addModelShow, setAddModelShow] = useState(false)
    const [favoriteModelShow, setFavoriteModelShow] = useState(false)
    const [selectedPokemon, setSelectedPokemon] = useState("")
    const [favoriteItems, setFavoriteItems] = useState([])

    const addFavoriteModalClose = () => setFavoriteModelShow(false);

    const addFavorite = (item) => {
        console.log(item)
        let array = favoriteItems
        if (array) {
            array.push(item)
            setFavoriteItems(array)
            localStorage.setItem('catchedItems', JSON.stringify(favoriteItems));
        }
    }

    const addModalClose = () => setAddModelShow(false);

 

    return (
        <div>
            <Row>
                {filteredPokemons.map(item =>
                    <Col md="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.sprites.front_default} />
                            <Card.Body>
                            </Card.Body>
                            <Card.Title>  <h1>{item.name}</h1>
                            </Card.Title>
                            <Button onClick={() => {
                                setSelectedPokemon(item)
                                setAddModelShow(true)
                            }
                            } variant="outline-primary"> See Details </Button>
                            <Button variant="outline-success" onClick={() => { addFavorite(item); setFavoriteModelShow(true); }}>Add Favorite List</Button>
                        </Card>
                    </Col>
                )}
            </Row>
            <PokemonDetails favoriteList={favoriteItems} show={addModelShow} item={selectedPokemon} onHide={addModalClose} />
            <AlterModal show={favoriteModelShow} onHide={addFavoriteModalClose} />
        </div>
    );
}


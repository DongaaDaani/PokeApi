import React from 'react';
import Pokemon from '../Pokemon/Pokemon.tsx';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Catch from '../Catch.tsx';

export default function PokemonList({ filteredPokemons }) {

    const [addModelShow, setAddModelShow] = useState(false)
    const [catchedPokemon, setCatchedPokemon] = useState([])

    const addModalClose = () => setAddModelShow(false);

    function handleAdd(item) {
        const newListPoke = catchedPokemon.concat(item);
        console.log(newListPoke)
        setCatchedPokemon(newListPoke);
    }

    return (
        <div>
            <Row>
                {filteredPokemons.map(item =>
                    <Col md="auto">
                        <Pokemon url={item.sprites.front_default} name={item.name}
                            weight={item.weight} height={item.height} abilities={item.abilities}
                            type={item.types} />

                        <Button variant="outline-success" style={{ width: '16.5rem' }}
                            onClick={() => {
                                handleAdd(item);
                                setAddModelShow(true);

                            }}>
                            Catch</Button>
                    </Col>
                )}
            </Row>
            <Catch show={addModelShow} poke={catchedPokemon} onHide={addModalClose} />
        </div>
    );
}


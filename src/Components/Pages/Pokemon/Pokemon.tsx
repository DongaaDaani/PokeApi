import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import PokemonDetails from './PokemonDetails.tsx';


/*
-I defined the Pokemon appearance in this component.
-There is a button under the pokemons, which send the props data to the PokemonDetails component,
and display them in a pop up window.
*/
export default function Pokemon(props) {

    const [addModelShow, setAddModelShow] = useState(false)  
    const addModalClose = () => setAddModelShow(false);

    return (
        <div>
            <Row>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.item.sprites.front_default} />
                    <Card.Body>
                    </Card.Body>
                        <Card.Title>  <h1>{props.item.name}</h1>  
                            </Card.Title>
                       
                        <Button onClick={() => {
                            setAddModelShow(true)} } 
                            variant="outline-primary"> See Details </Button>
                </Card> 
            </Row>
            <PokemonDetails show={addModelShow}  item={props.item} onHide={addModalClose} />
        </div>
    )
}
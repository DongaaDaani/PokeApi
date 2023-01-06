import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import PokemonDetails from './PokemonDetails.tsx';


export default function Pokemon(props) {

    const [addModelShow, setAddModelShow] = useState(false)
    
    const [selectedUrl, setSelectedUrl] = useState("")
    const [selectedName, setselectedName] = useState("")
    const [selectedWeight, setselectedWeight] = useState("")
    const [selectedHeight, setselectedHeight] = useState("")
    const [selectedType, setSelectedType] = useState([])
    const [selectedAbilities, setselectedAbilities] = useState([])
   



    const addModalClose = () => setAddModelShow(false);


    return (
        <div>
            <Row>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.url} />
                    <Card.Body>
                    </Card.Body>
                        <Card.Title>  <h1>{props.name}</h1>  
                            </Card.Title>
                       
                        <Button onClick={() => {
                            setSelectedType(props.type.map((e) =>
                                e.type.name
                            ));

                            setselectedAbilities(props.abilities.map((e) =>
                                e.ability.name
                            ));
                            setSelectedUrl(props.url);
                            setselectedName(props.name);
                            setselectedHeight(props.height);
                            setselectedWeight(props.weight);
                            setAddModelShow(true)
                        }
                       } variant="outline-primary"> See Details </Button>
           
            
                </Card> 


            </Row>
            <PokemonDetails show={addModelShow} url={selectedUrl} name={selectedName} type={selectedType} ability={selectedAbilities} weight={selectedWeight} height={selectedHeight} onHide={addModalClose} />
          
        </div>
    )
}
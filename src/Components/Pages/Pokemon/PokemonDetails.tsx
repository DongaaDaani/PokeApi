import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

/*
-This component is a pop up window, where i get and display the prop information 
from Pokemon Component.
-There is a Catch button under the pop up window, where you can add the item to the Catch list, using
localStorage. (Store it 'catchedItems' )
-Also define a Back button to close the Pop Up window

*/
export default function PokemonDetails(props) {



    const [myStyle, setMyStyle] = useState(JSON.parse(localStorage.getItem('catchedItems')));



    const addFavorite = (item) => {
        let array = props.favoriteList
        // array.push(item)
        var eqaulValue = false
        array.map((arr) => {
            if (arr.name == item.name) {
                alert('You already Catched this pokemon! You can see it the Catch menu!')
                eqaulValue = true

            }
        })
        if (array && eqaulValue == false) {
            array.push(item)
            alert('Catched successfull! You can see the item in your Catched List!')
            localStorage.setItem('catchedItems', JSON.stringify(array));
        }
    }


    const handleClick = (id) => {
        setMyStyle(prevState => ({
            ...myStyle,
            [id]: !prevState[id]
        }))
    }

    if (props.item) {
        return (
            <div className="container">
                <Modal {...props} size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title >
                            Pokemon details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col >
                                <img style={{ width: '18rem' }} src={props.item.sprites.front_default} />
                            </Col>
                            <Col>
                                <h1>{props.item.name} <br /> </h1>
                                <h5>Type: </h5>
                                {(props.item.types.map((e) =>
                                    <p> - {e.type.name} <br /> </p>
                                ))}
                                <h5>Ability: </h5>  {(props.item.abilities.map((e) =>
                                    <p> - {e.ability.name} <br /> </p>
                                ))}
                                <h5> Weight : {props.item.weight} <br /></h5>
                                <h5>Height : {props.item.height}  <br /></h5>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={props.onHide}>
                            Back
                        </Button>
                        <Button
                            variant={myStyle[`${props.item.id}`]
                                ? "danger"
                                : "outline-success"} onClick={() => { addFavorite(props.item); handleClick(props.item.id); }} >
                            {myStyle[`${props.item.id}`]
                                ? "Catched"
                                : "Catch"}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
    else {
        return (<div > </div>)
    }


}



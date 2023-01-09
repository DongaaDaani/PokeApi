import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

/*
-This component is a pop up window, where i get and display the prop information 
from Pokemon Component.
-There is a Catch button under the pop up window, where you can add the item to the Catch list, using
localStorage. (Store it 'catchedItems' )
-Also define a Back button to close the Pop Up window

*/
export default class PokemonDetails extends Component {
    constructor(props) {
        super(props);
    }

    addFavorite = (item) => {
        let array = this.props.favoriteList
        array.push(item)
        if (array) {
            localStorage.setItem('catchedItems', JSON.stringify(array));
        }
    }

    render() {
        if (this.props.item) {
            return (
                <div className="container">
                    <Modal {...this.props} size="lg" centered>
                        <Modal.Header closeButton>
                            <Modal.Title >
                                Pokemon details
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col >
                                    <img style={{ width: '18rem' }} src={this.props.item.sprites.front_default} />
                                </Col>
                                <Col>
                                    <h1>{this.props.item.name} <br /> </h1>
                                    <h5>Type: </h5>
                                    {(this.props.item.types.map((e) =>
                                        <p> - {e.type.name} <br /> </p>
                                    ))}
                                    <h5>Ability: </h5>  {(this.props.item.abilities.map((e) =>
                                        <p> - {e.ability.name} <br /> </p>
                                    ))}
                                    <h5> Weight : {this.props.item.weight} <br /></h5>
                                    <h5>Height : {this.props.item.height}  <br /></h5>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={this.props.onHide}>
                                Back
                            </Button>
                            <Button onClick={() => { this.addFavorite(this.props.item); alert("Catched successfull! You can see the item in your Catched List!") }} variant="success">Catched
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
}


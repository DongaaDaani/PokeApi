import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";


export default class PokemonDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                            <Col >   <img style={{ width: '18rem' }} src={this.props.url} />
                            </Col>
                            <Col>
                                <h1>{this.props.name} <br /> </h1>
                                <Col> <h4>Type:   </h4> {this.props.type.map((item) => <h5> - {item} </h5>)} </Col>
                                <br />
                                <h5>Ability: </h5> {this.props.ability.map((item) => <h5> - {item} </h5>)}
                                <br />
                                <h5>Weight : {this.props.weight} <br /></h5>
                                <h5>Height : {this.props.height}  <br /></h5>
                            </Col>

                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>
                            Vissza
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


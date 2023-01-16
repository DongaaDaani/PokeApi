import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

/*
-This is a Pop Up Window, when somebody added an item into the Catch List, this window will pop up. 
*/
export default function AlertTypeModal(props) {

        return (
            <div className="container">
                <Modal {...props} size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title >
                           Select the type of pokemons
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <h5>
                                    You can select the type of pokemon you want to see!<br />
                                    Please press double click to the selected types.</h5>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={props.onHide}>
                            Back
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    
}


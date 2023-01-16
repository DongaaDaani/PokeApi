import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

/*
-This is a Pop Up Window, when somebody added an item into the Catch List, this window will pop up. 
*/
export default function AlterModal(props) {

    return (
        <div className="container">
            <Modal {...props} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title >
                        Catched successfull the pokemon.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <h5>
                                You can check the catched pokemon list in the Catched menu!<br />
                                If you want to remove an item your list, you can press the remove button.</h5>
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


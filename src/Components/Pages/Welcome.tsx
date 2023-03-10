import React from "react";
import { Modal, Button} from "react-bootstrap";

/*
-This components is a pop up window. It's appear when somebody start the game,
and click the Character menu. There is a Welcome text and a back button.
*/
export default function Welcome(props) {
 
        return (
            <div className="container">
                <Modal {...props} size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title >
                            Pokemon Game
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p> -In this menu item, you can view the pokemons in the game. <br/> 
                    -It is possible to list Pokémon by type and search by name in the search menu. <br/>
                    Another function is catching pokemon, where you can collect the pokemon you want to catch. <br/></p>
                   
                   <h2>Enjoy the game!</h2> 
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


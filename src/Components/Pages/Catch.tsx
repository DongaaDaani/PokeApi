import React from 'react'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';

export default class Catch extends Component {
  constructor(props) {
    
    super(props); 
    this.state = {
      pokeList: this.props.poke,  deletedPokemonName:"", newList:[{}] 
  }
  }
  
  static getDerivedStateFromProps(props, state) {
    return {pokeList: props.poke };
  }

    removeItem=(list,name)=>{     
     list = list.filter((item) => item.name !== name)  
     console.log("remove list",list)       
    this.setState({pokeList:list})
    console.log("newList",this.state.newList)
    this.setState({newList:list})
};


  render() {
    const pokemons=this.state.pokeList;  
    return (
      <div>
     
        <Modal {...this.props} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title >
            
              Catched Pokemons
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Weight</th>
                  <th>Height</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>

                {pokemons.map((item) =>
                  <tr> <td>{item.name}</td> <td>{item.height}</td> <td>{item.weight}</td> <td><Button onClick={()=>{this.removeItem(pokemons,item.name); this.setState({deletedPokemonName:item.name})}}  variant="danger">Release</Button></td></tr>
                )}

              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Vissza
            </Button>
          </Modal.Footer>
        </Modal>
        <br />
      </div>
    );
  
   
  }
}


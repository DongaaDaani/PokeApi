
import React, { useState } from 'react';

import PokemonList from '../Pokemon/PokemonList.tsx';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function Search({ details, fullPoke }) {

  const [searchField, setSearchField] = useState("");
  
  var filteredPokemons
  if (searchField == "") {
     filteredPokemons = details.filter( // Only one page of pokemons
      poke => {
        return (
          poke.name.toLowerCase().includes(searchField.toLowerCase())
        );
      }
    );
  }
  else {

     filteredPokemons = fullPoke.filter( // All pokemons
      poke => {
        return (
          poke.name.toLowerCase().includes(searchField.toLowerCase())
        );
      }
    );
  }



  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <PokemonList filteredPokemons={filteredPokemons} />
    );
  }

  return (

    <div className="pa2">
      <InputGroup size="lg" className="mb-5" style={{ width: '18rem' }}>

        <Form.Control
          onChange={handleChange}
          aria-label="Small"
          placeholder='Search pokemons by name'
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      {searchList()}
    </div>


  );
}

export default Search;
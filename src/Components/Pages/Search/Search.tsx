
import React, { useState } from 'react';

import PokemonList from '../Pokemon/PokemonList.tsx';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function Search({ details, fullPoke }) {

  const [searchField, setSearchField] = useState("");

  const [pokemonsFull,setPokemonsFull]= useState([]);
  const [pokemonsFullUrl,setPokemonsFullUrl]= useState([]);
  

  const getPokemonInformation = async () => {
   

    const full =  await Axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=700")
    setPokemonsFull(full.data.results)

    setPokemonsFullUrl([])
    pokemonsFull.map(async (item) => {
           
      const morePokemonDetais = await Axios.get(item.url)
      setPokemonsFullUrl(
          state => {
              state = [...state, morePokemonDetais.data]
              return state;
          })  
  })
}



  var filteredPokemons

  if (searchField == "") {
     filteredPokemons = details.filter( // Only one page  
      poke => {
        return (
          poke.name.toLowerCase().includes(searchField.toLowerCase())
        );
      }
    );
  }
  else {
    getPokemonInformation()
     filteredPokemons = fullPoke.filter( // fullPoke 
      poke => {
        return (
          poke.name.toLowerCase().includes(searchField.toLowerCase())
        );
      }
    );
  }



  const handleChange = e => {

    setSearchField(e.target.value);

    console.log('filtered ', filteredPokemons)
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
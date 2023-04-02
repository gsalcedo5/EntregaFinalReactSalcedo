import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

function ItemListContainer() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon") 
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setPokemonList(json.results) 
    });

  }, []);

  return (
    <h2 style={{ display: "flex", justifyContent: "center", background: "lightblue" }}>
      <ItemList items={pokemonList} />
    </h2>
  );
}

export default ItemListContainer;

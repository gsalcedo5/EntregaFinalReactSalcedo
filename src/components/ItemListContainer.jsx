import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import {getItems} from "../services/firestore";


function ItemListContainer() {
  const [pokemonList, setPokemonList] = useState([]);

/* Para traer los pokemon desde la API en lugar de FIREBASE
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon") 
    .then((response) => response.json())
    .then((json) => {
      setPokemonList(json.results) 
    });

  }, []); */

  useEffect(() => {
    getItems().then((response) => 
    {setPokemonList(response)}
    );

  }, []);

  return (
    <h2 style={{ display: "flex", justifyContent: "center", background: "lightblue" }}>
      <ItemList items={pokemonList} />
    </h2>
  );
}

export default ItemListContainer;

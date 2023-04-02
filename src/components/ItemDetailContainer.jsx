import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {


  const [pokemonDetails, setPokemonDetails] = useState(null);
  const params = useParams();
  const pokemonName = params.pokemonName;

  useEffect(() => {
    if (pokemonName) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => setPokemonDetails(data));
    }
  }, [pokemonName]);


  if (!pokemonDetails) {
    return <p>Loading...</p>;
  }
  return (
        <ItemDetail pokemonDetails={pokemonDetails} />
  );
}

export default ItemDetailContainer;


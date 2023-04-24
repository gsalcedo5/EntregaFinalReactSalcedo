import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';
import {cartContext} from "../context/cartContext";
import { getSingleItem } from '../services/firestore';


function ItemDetailContainer() {
/* Para traaer los datos desde la API y ver todos los pokemon:

const [pokemonDetails, setPokemonDetails] = useState(null);
  const params = useParams();
  const pokemonName = params.pokemonName;
  getSingleItem(pokemonName);
const {cart, addItem} = useContext(cartContext);

   useEffect(() => {
    if (pokemonName) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => setPokemonDetails(data));
    }
  }, [pokemonName]); */


  const [pokemonDetails, setPokemonDetails] = useState(null);
  const { pokeid} = useParams();
  const pokemonName = pokeid;
  
const {cart, addItem, getTotalPrice} = useContext(cartContext);
  useEffect(() => {
    if (pokemonName) {
      getSingleItem(pokeid).then((response) => setPokemonDetails(response));
    } 
  }, [pokemonName]);

  if (!pokemonDetails) {
    return <p>Loading...</p>;
  }

  function handleAddToCart(count){
    addItem(count,pokemonDetails.name);
    getTotalPrice(count,pokemonDetails.price)
}

  return (
    <div>

    <ItemDetail pokemonDetails={pokemonDetails} />
    <ItemCount onAddToCart={handleAddToCart} />
    </div>
  );
}

export default ItemDetailContainer;


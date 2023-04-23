import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';
import {cartContext} from "../context/cartContext";


function ItemDetailContainer() {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const params = useParams();
  const pokemonName = params.pokemonName;

const {cart, addItem} = useContext(cartContext);
console.log("cart:", cart) /* Cantidad elementos que se muestran en el carrito*/


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

  function handleAddToCart(count){
    addItem(count);
    console.log("Agregaste al carrito este pokemon:" , pokemonDetails.name);
}

  return (
    <div>
    <ItemDetail pokemonDetails={pokemonDetails} />
    <ItemCount onAddToCart={handleAddToCart} />
    </div>
  );
}

export default ItemDetailContainer;


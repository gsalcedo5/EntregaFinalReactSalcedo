import React from "react";

function ItemDetail({pokemonDetails}){
    if (!pokemonDetails) {
        return null;
      }

    return(   
    <div>
        <h2>{pokemonDetails.name}</h2>
        <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
        <p>Height: {pokemonDetails.height}</p>
        <p>Weight: {pokemonDetails.weight}</p>
   
    </div>
    )
}
export default ItemDetail;

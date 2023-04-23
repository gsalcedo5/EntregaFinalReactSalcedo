import React from "react";

function ItemDetail({pokemonDetails}){
    if (!pokemonDetails) {
        return null;
      }
      console.log(pokemonDetails);
    return(   
    <div>
        <h2 style={{margin:"40px"}}>{pokemonDetails.name}</h2>
        <img style={{marginLeft:"40px"}} src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
        <h3 style={{marginLeft:"40px"}}>Altura: {pokemonDetails.height} m</h3>
        <h3 style={{marginLeft:"40px"}}>Peso: {pokemonDetails.weight} Kg</h3>
     
        {pokemonDetails.types[0].type.name=="fire" && <h2 style={{color:"red",marginLeft:"20px"}}>Tipo: Fuego 🔥</h2>}
        {pokemonDetails.types[0].type.name=="water" && <h2 style={{color:"blue",marginLeft:"20px"}}>Tipo: Agua 🌊</h2>}
        {pokemonDetails.types[0].type.name=="grass" && <h2 style={{color:"green",marginLeft:"20px"}}>Tipo: Planta 🌿</h2>}
    </div>
    )
}
export default ItemDetail;

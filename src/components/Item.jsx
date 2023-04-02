import React from 'react';
import {Link} from "react-router-dom";

function ItemList({pokemon}){

    return (
<div key={pokemon.name} className='card'>
<h5>{pokemon.name}</h5>
<Link to={ `/detalle/${pokemon.name}` }> Ver detalle del pokemon</Link>
</div>
    );

}
  export default ItemList;

 

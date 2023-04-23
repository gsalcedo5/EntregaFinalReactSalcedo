import React from 'react';
import {Link} from "react-router-dom";

function Item({pokemon}){
    return (
<div key={pokemon.name} className='card'>
<h5>{pokemon.name}</h5>
<Link to={ `/detalle/${pokemon.id}` }> Ver detalle del pokemon</Link>
</div>
    );

}
  export default Item;

 

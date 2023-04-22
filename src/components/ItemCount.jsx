import React, { useState } from "react";
import Button from "./Button";

export default function ItemCount (props) {
const [count, setCount] = useState(0) ;

const stock = 20;

function handleAdd(){
    if (count<stock){
 setCount (count + 1)
    }
}
function handleSubstract(){
    if (count>0){
    setCount (count - 1)
    }
}   

return ( 
<div>
    <Button onClick={handleSubstract}>-</Button>
    <span> {count} </span>
    <Button onClick={handleAdd}>+</Button>
    <Button onClick={ () => props.onAddToCart(count)}> Agregar al carrito </Button>
</div>
);
}
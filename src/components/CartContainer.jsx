import React, { useContext } from "react";
import {cartContext} from "../context/cartContext"

function CartContainer(){
    const context = useContext(cartContext);
    const cart = context.cart;
   
    const countItems = cart.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

    const itemsList = Object.entries(countItems).map(([item, count]) => (
        <li style={{margin:"20px"}} key={item}>
            {item}: {count}
        </li>
    ));


    return (
    <div>

            {cart.length==0 && <h2> Tu Carrito está vacio, agregá pokemones</h2>}
            {cart.length!=0 && <h1 style={{margin:"20px"}}>Tu carrito: </h1>}
            {cart.length!=0 && <ul style={{margin:"20px"}}>{itemsList}</ul>}
    </div>
    )
}

export default CartContainer;
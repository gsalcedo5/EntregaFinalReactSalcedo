import React, { createContext, useContext, useState } from "react";

const cartContext = createContext({default : "default"});

const Provider = cartContext.Provider;

function CartProvider(props){
    const [cart, setCart]= useState([]);

    function addItem(count){
        const newCart = [...cart, ...Array(count)]; 
        setCart(newCart);
    }

    return(
        <Provider value= {{ cart: cart.length , addItem: addItem }}> 
            {props.children }
        </Provider>
    );
}

export { cartContext, CartProvider };

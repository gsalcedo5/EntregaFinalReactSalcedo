import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import React, { createContext, useContext, useState } from "react";

const cartContext = createContext({default : "default"});

const Provider = cartContext.Provider;

function CartProvider(props){
    const [cart, setCart]= useState([]);

    function addItem(count,products){
        const newCart = cart.concat(Array.from({length: count}, () => products));
        console.log("newCart:", newCart);
        setCart(newCart);

    }

    return(
        <Provider value= {{ cart: cart , addItem: addItem }}> 
            {props.children }
        </Provider>
    );
}

export { cartContext, CartProvider };

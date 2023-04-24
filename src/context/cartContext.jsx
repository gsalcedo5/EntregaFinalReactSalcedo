import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import React, { createContext, useContext, useState } from "react";

const cartContext = createContext({default : "default"});

const Provider = cartContext.Provider;


function CartProvider(props){
    const [cart, setCart]= useState([]);

    function addItem(count,productsName){
        const newCart = cart.concat(Array.from({length: count}, () => productsName)); 
        setCart(newCart);
    }  

    function getTotalPrice(count,productPrice){
        const totalPrice = productPrice*count;
        console.log("El precio total de la suma de "+ count+ " pokemones de este tipo es " + totalPrice);
        return totalPrice;
    }

    function clearCart(){
        setCart([]);
    }

    return(
        <Provider value= {{ cart: cart , addItem: addItem , getTotalPrice, clearCart}}> 
            {props.children }
        </Provider>
    );
}

export { cartContext, CartProvider};

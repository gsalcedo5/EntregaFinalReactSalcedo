import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import React, { createContext, useContext, useState } from "react";

const cartContext = createContext({default : "default"});

const Provider = cartContext.Provider;

function CartProvider(props){
    const [cart, setCart]= useState([]);

    function addItem(count,productsName){
        const newCart = cart.concat(Array.from({length: count}, () => productsName)); 
        console.log("newCart:", newCart);
        setCart(newCart);
    }  



    function getTotalPrice(count,productPrice){
        const totalPrice = productPrice*count;
        console.log(totalPrice);
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

export { cartContext, CartProvider };

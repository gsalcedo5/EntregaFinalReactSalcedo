import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import React, { createContext, useContext, useState } from "react";

const cartContext = createContext({default : "default"});

const Provider = cartContext.Provider;


function CartProvider(props){
    const [cart, setCart]= useState([]);
    const [totalPrice, setTotalPrice] = useState([])

    function addItem(count,productsName){
        const newCart = cart.concat(Array.from({length: count}, () => productsName)); 
        setCart(newCart);
    }  

    function getTotalPrice(count,productPrice){
        const newTotalPrice = (parseFloat(totalPrice) || 0) + (count * parseFloat(productPrice));
        setTotalPrice(newTotalPrice);
    
    }

    function clearCart(){
        setCart([]);
    }

    return(
        <Provider value= {{ cart: cart , addItem: addItem , getTotalPrice, clearCart, totalPrice: totalPrice}}> 
            {props.children }
        </Provider>
    );
}

export { cartContext, CartProvider};

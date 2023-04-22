import React, { createContext, useContext, useState } from "react";

const cartContext = createContext({default : "default"});

const Provider = cartContext.Provider;



function CartProvider(props){
    const [cart, setCart]= useState([]);


    function addItem(product, count){

        const newCart = [...cart, {...product, count}];

        console.log(newCart.length,"hola"); 
        
        setCart(newCart);
        
    }
/*     function getCountInCart() {
        let total = 0;
        cart.forEach((item) => (total += item.count));
        console.log("total:", total);
        return total;
      } */

    return(
        <Provider value= {{ cart: cart.length , addItem: addItem }}> 
            {props.children }
        </Provider>
    );
}

export { cartContext, CartProvider };

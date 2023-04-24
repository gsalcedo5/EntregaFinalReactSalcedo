import React, { useContext } from "react";
import {cartContext} from "../context/cartContext";
import Button from "./Button";
import { createOrder } from "../services/firestore";
import swal from "sweetalert";
import FormCheckout from "./FormCheckout";

function CartContainer(){
    const context = useContext(cartContext);
    const {cart, getTotalPrice, clearCart } = context;
   
     const countItems = cart.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

     const itemsList = Object.entries(countItems).map(([item, count]) => (
        <li style={{margin:"20px"}} key={item}>
            {item}: {count}
        </li>
    )); 

    
      
    async function handleCheckout(userData){
        const order={
            items: cart,
            buyer: userData,
            total: getTotalPrice(),
            date: new Date() ,
        }
        const orderId = await createOrder(order);
        const orderComplete = await swal(
            {
                title: "Gracias por tu compra",
                text: "Tu compra se realizó correctamente. Tu ticket es: "+ orderId,
                icon: "success",
            }
        );
            clearCart();
    }

    return (
    <div>
        {console.log(getTotalPrice())}
            {cart.length==0 && <h2 style={{margin:"51px"}}> Tu Carrito está vacio, agregá pokemones</h2>}
            {cart.length!=0 && <h1 style={{margin:"20px"}}>Tu carrito: </h1>}
            {cart.length!=0 && <ul style={{margin:"20px"}}>{itemsList}</ul>}
            {cart.length!=0 && <FormCheckout onCheckout={handleCheckout} />}
            
    </div>
    )
}

export default CartContainer;
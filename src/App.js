import React, { createContext, useContext, useState } from "react";
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CartProvider } from "./context/cartContext";

function App() {

  return (
    <div >
      <CartProvider>
      <BrowserRouter> 
      <NavBar
      img="/imgs/gst.webp" />
        <Routes>
          <Route path="/" element={ <ItemListContainer/>}/> 
          <Route path="/detalle/:pokemonName" element={<ItemDetailContainer/>}/> 
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;


import React from "react";
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter> 
      <NavBar
      img="/imgs/gst.webp" />
        <Routes>
        {/* <Route path="/" element={ <NavBar/>}/>  */}
          <Route path="/" element={ <ItemListContainer/>}/> 
          <Route path="/detalle/:pokemonName" element={<ItemDetailContainer/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

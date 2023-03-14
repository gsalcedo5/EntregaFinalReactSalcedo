
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div >
      <NavBar
      img="/imgs/gst.webp" />
      <ItemListContainer texto="Productos a mostrar"/>
    </div>
  );
}

export default App;

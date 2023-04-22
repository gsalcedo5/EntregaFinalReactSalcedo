import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {cartContext} from "../context/cartContext";


function NavBar(props) {
  const {cart} = useContext(cartContext);
  function getCountInCart() {
    let total = 0;
    cart.forEach((item) => (total += item.count));
    console.log(total);
    return total;
  }
  return (
    <nav>
      <div className="container-fluid">
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            background: "lightblue",
          }}
        >       
                <img src={props.img} style={{width:"8%"}} alt="fotoLogo" />
                <a style={{ display: "flex", padding: "2%" }} >
                    <Link to={ `./` }> GS Tecnologies </Link>
                </a>
                

                <li style={{ display: "flex", padding: "2%" }} >
                    <a href="index.html">Home</a>
                </li>
                <li style={{ display: "flex", padding: "2%" }} >
                    <a href="./pages/Smartphones.html">Smartphones</a>
                </li>
                <li style={{ display: "flex", padding: "2%" }} >
                    <a href="./pages/Nosotros.html">Nosotros</a>
                </li>
                <div style={{ display: "flex", padding: "2%" }}>
                    
                    <CartWidget cant={cart} />

                
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

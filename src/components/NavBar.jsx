import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {cartContext} from "../context/cartContext";


function NavBar(props) {
  const {cart} = useContext(cartContext);
  return (
    <nav>
      <div className="container-fluid">
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            background: "lightblue",
            color:"black",
          }}
        >       
                <img src={props.img} style={{width:"8%"}} alt="fotoLogo" />
                
                
                
                <li style={{ display: "flex", padding: "2%" }} >
                <Link to={ `./` }> Tienda de pokemones </Link>
                </li>
                <li style={{ display: "flex", padding: "2%" }} >
                <Link to="/cart" > Cart</Link>
                </li>

                  <li style={{ display: "flex", padding: "2%" }} >
                  <CartWidget cant={cart.length} />
                </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

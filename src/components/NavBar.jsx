import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav>
      <div class="container-fluid">
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
                

                <li style={{ display: "flex", padding: "2%" }} class="nav-item">
                    <a href="index.html">Home</a>
                </li>
                <li style={{ display: "flex", padding: "2%" }} class="nav-item">
                    <a href="./pages/Smartphones.html">Smartphones</a>
                </li>
                <li style={{ display: "flex", padding: "2%" }} class="nav-item">
                    <a href="./pages/Nosotros.html">Nosotros</a>
                </li>
                <div style={{ display: "flex", padding: "2%" }}>
                    <CartWidget />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

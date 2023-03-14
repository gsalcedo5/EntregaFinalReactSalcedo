import CartWidget from "./CartWidget";

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
                <a style={{ display: "flex", padding: "2%" }} href="index.html">
                    GS Tecnologies
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

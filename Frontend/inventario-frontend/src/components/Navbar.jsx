import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "10px", color: "#fff" }}>
        Inventario
      </Link>
      <Link to="/crear" style={{ color: "#fff" }}>
        Crear
      </Link>
    </nav>
  );
}

export default Navbar;
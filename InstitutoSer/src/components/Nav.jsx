import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <nav className="nav">
        <Link className="w3-bar-item w3-button" href="/" to="/">
          InstitutoSer
        </Link>

        <Link className="w3-bar-item w3-button" href="/aboutme" to="/Masdenos">
          Mas de Nosotros
        </Link>
        <Link
          className="w3-bar-item w3-button"
          href="/portfolio"
          to="/portfolio"
        >
          Comunidad
        </Link>
      </nav>
    </div>
  );
}

export default Nav;

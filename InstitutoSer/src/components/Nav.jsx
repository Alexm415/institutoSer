import { Link } from "react-router-dom";

const styles = {
  nav: {
    padding: "50px",
  },
};

function Nav() {
  return (
    <div style={styles.nav} className="w3-top">
      <nav className="w3-bar w3-white w3-wide w3-padding w3-card">
        <Link className="w3-bar-item w3-button" href="/" to="/">
          InstitutoSer
        </Link>
        <Link className="w3-bar-item w3-button" href="/aboutme" to="/aboutme">
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

import { Link } from "react-router-dom";
import logo from "../../assets/logo-orange.png";

function Header() {
  return (
    <header>
      <Link to="/" className="logo" title="Kasa">
        <img src={logo} alt="Logo Kasa" />
      </Link>
      <nav>
        <ul className="container-banner font-24 font-orange">
          <li>
            <Link to="/" title="Accueil">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" title="A Propos">
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

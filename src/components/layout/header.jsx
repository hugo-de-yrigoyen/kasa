import { Link } from "react-router-dom";
import logo from "../../assets/logo-orange.png";
import "../../styles/header.css";

export default function Header() {
  return (
    <header>
      <Link to="/kasa" title="Kasa">
        <img src={logo} alt="Logo Kasa" />
      </Link>
      <nav>
        <ul className="container-banner">
          <li>
            <Link to="/kasa" title="Accueil">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/kasa/about" title="A Propos">
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

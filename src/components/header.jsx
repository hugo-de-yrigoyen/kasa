import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <a href="#" className="logo" title="Kasa">
        <img src="../assets/logo-orange.png" alt="Logo Kasa" />
      </a>
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

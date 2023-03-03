function Header() {
  return (
    <header>
      <a href="#" className="logo" title="Kasa">
        <img src="../assets/logo-orange.png" alt="Logo Kasa" />
      </a>
      <nav>
        <ul className="container-banner font-24 font-orange">
          <li>
            <a href="#" title="Accueil">
              Accueil
            </a>
          </li>
          <li>
            <a href="/about" title="A Propos">
              A Propos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

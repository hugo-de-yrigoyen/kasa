import { Link } from "react-router-dom";
import logo from "../../assets/logo-white.png";

export default function Footer() {
  return (
    <footer>
      <Link to="/" className="logo" title="Kasa">
        <img src={logo} alt="Logo Kasa" />
      </Link>
      <span className="font-24 font-white">
        © 2020 Kasa. All rights reserved
      </span>
    </footer>
  );
}

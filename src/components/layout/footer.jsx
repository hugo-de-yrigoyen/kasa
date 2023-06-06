import { Link } from "react-router-dom";
import logo from "../../assets/logo-white.png";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <Link to="kasa" title="Kasa">
        <img src={logo} alt="Logo Kasa" />
      </Link>
      <span>
        © 2020 Kasa. All rights reserved
      </span>
    </footer>
  );
}

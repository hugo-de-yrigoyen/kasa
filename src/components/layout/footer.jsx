import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Link to="/" class="logo" title="Kasa">
        <img src="../assets/logo-white.png" alt="Logo Kasa" />
      </Link>
      <span className="font-24 font-white">
        © 2020 Kasa. All rights reserved
      </span>
    </footer>
  );
}

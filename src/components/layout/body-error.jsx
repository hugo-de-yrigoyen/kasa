import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/error.css";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/kasa">Retourner sur la page d'accueil</Link>
    </div>
  );
}

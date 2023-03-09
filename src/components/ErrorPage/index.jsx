import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1 className="font-288 weight-700 font-orange">404</h1>
      <p className="font-36 font-orange">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <p className="font-18 link">Retourner sur la page d'accueil</p>
    </div>
  );
}

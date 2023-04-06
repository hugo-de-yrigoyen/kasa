import Collapse from "../generics/collapse";
import AboutCoverImg from "../coverImgs/about-cover-img";
import "../../styles/about.css";

export default function BodyAbout() {
  const text1 =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
  const text2 =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const text3 =
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  const text4 =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  return (
    <div className="body-container">
      <AboutCoverImg />
      <Collapse title="Fiabilité" text={text1} />
      <Collapse title="Respect" text={text2} />
      <Collapse title="Service" text={text3} />
      <Collapse title="Sécurité" text={text4} />
    </div>
  );
}

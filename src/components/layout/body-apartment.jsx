import { useParams } from "react-router-dom";
import data from "../../datas/logements.json";
import Gallery from "../coverImgs/gallery";
import Title from "../generics/title";
import Host from "../generics/host";
import Collapse from "../generics/collapse";
import Tags from "../generics/tag";
import Stars from "../generics/stars";
import "../../styles/apartment.css";

export default function BodyApartment() {
  const { apartmentId } = useParams();

  //Searching for apartment's datas in .json based on URL's apartment's ID
  let apartment = "";
  data.forEach((log) => {
    if (log.id === apartmentId) {
      apartment = log;
    }
  });

  return (
    <div className="container-apartment">
      <Gallery apartment={apartment} />
      <div className="bloc-presentation">
        <div className="bloc-text">
          <Title apartment={apartment} />
          <Tags apartment={apartment} />
        </div>
        <div className="bloc-user">
          <Host apartment={apartment} />
          <Stars apartment={apartment} />
        </div>
      </div>
      <div className="bloc-collapse">
        <Collapse title="Description" text={apartment.description} />
        <Collapse title="Équipements" text={apartment.equipments} />
      </div>
    </div>
  );
}

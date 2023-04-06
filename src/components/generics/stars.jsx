import StarEmpty from "../../assets/star-empty.png";
import StarFull from "../../assets/star-full.png";
import "../../styles/stars.css";

export default function Stars({ apartment }) {
  let { rating } = apartment;

  const stars = [];

  //Pushes empty or full stars in an array, based on rating, before rendering it
  for (let i = 0; i < 5; i++) {
    if (rating > i) {
      stars.push(<img src={StarFull} key={i} alt="Star" />);
    } else {
      stars.push(<img src={StarEmpty} key={i} alt="Empty star" />);
    }
  }

  return <div className="bloc-stars">{stars}</div>;
}

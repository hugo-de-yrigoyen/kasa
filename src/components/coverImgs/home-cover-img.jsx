import homeImg from "../../assets/home.png";
import background from "../../assets/background.png";
import "../../styles/cover-img.css";

export default function HomeCoverImg() {
  return (
    <div className="container-cover">
      <img src={homeImg} alt="Cover" />
      <img src={background} alt="filter" className="background"/>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

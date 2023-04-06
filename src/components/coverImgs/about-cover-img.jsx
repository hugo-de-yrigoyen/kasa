import aboutImg from "../../assets/about.png";
import background from "../../assets/background.png";
import "../../styles/cover-img.css";

export default function CoverImg() {
  return (
    <div className="container-cover">
      <img src={aboutImg} alt="Cover" />
      <img src={background} alt="filter" className="background" />
    </div>
  );
}

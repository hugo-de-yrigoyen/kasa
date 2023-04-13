import "../../styles/cover-img.css";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";

export default function ApartmentCoverImg({ apartment }) {
  return (
    <div className="cover-img">
      <img src={apartment.cover} className="cover" alt="Cover" />
      <div className="arrows">
        <img src={arrowLeft} alt="Left arrow" />
        <img src={arrowRight} alt="Right arrow" />
      </div>
    </div>
  );
}

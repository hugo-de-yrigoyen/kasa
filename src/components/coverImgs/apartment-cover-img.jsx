import "../../styles/cover-img.css";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import { useState } from "react";

export default function ApartmentCoverImg({ apartment }) {
  let [number, setImageNumber] = useState(0);

  if (number < 0) {
    number = 0;
  }
  if (number >= apartment.pictures.length) {
    number = apartment.pictures.length - 1;
  }

  return (
    <div className="cover-img">
      <img src={apartment.pictures[number]} className="cover" alt="Gallery" />
      <div className="arrows">
        <button id="leftArrow" onClick={() => setImageNumber(number - 1)}>
          <img src={arrowLeft} alt="Left arrow" />
        </button>
        <button id="rightArrow" onClick={() => setImageNumber(number + 1)}>
          <img src={arrowRight} alt="Right arrow" />
        </button>
      </div>
    </div>
  );
}

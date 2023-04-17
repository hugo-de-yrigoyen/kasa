import "../../styles/cover-img.css";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import { useState } from "react";

export default function Gallery({ apartment }) {
  let [number, setImageNumber] = useState(0);
  let gallery = true;

  if (number < 0) {
    number = apartment.pictures.length - 1;
  }
  if (number >= apartment.pictures.length) {
    number = 0;
  }
  if (apartment.pictures.length < 2) {
    gallery = false;
  }

  return gallery ? (
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
  ) : (
    <div className="cover-img">
      <img src={apartment.pictures} className="cover" alt="cover" />
    </div>
  );
}

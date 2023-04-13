import arrowUp from "../../assets/arrow-up.png";
import arrowDown from "../../assets/arrow-down.png";
import { useState } from "react";
import "../../styles/collapse.css";

export default function Collapse({ title, text }) {
  const paragraph = [];

  // If text is a list of items, pushes it line by line in an array before rendering it
  if (Array.isArray(text)) {
    for (let i = 0; i < text.length; i++) {
      paragraph.push(<p key={i}>{text[i]}</p>);
    }
  } else {
    paragraph.push(<p key={text}>{text}</p>);
  }

  //Renders without paragraph if state is false (false by default). Changes state's boolean on click
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <section className="container-collapse">
      <button
        className="container-title"
        id={title}
        onClick={() => setIsOpen(false)}>
        <h2>{title}</h2>
        <img src={arrowUp} alt="collapse" />
      </button>
      <div className="bloc-paragraph">{paragraph}</div>
    </section>
  ) : (
    <section className="container-collapse">
      <button
        className="container-title"
        id={title}
        onClick={() => setIsOpen(true)}>
        <h2>{title}</h2>
        <img src={arrowDown} alt="collapse" />
      </button>
    </section>
  );
}

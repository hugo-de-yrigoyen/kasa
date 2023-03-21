import arrow from "../../assets/arrow.png";

export default function Collapse({ title, text }) {
  return (
    <div className="container-collapse">
      <button className="container-title">
        <h2>{title}</h2>
        <img src={arrow} alt="collapse" />
      </button>
      <p>{text}</p>
    </div>
  );
}

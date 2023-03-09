export default function Collapse(title, text) {
  return (
    <div className="container-collapse">
      <div className="container-title">
        <h2>{title}</h2>
        <img src=".../assets/arrow.png" alt="collapse" />
      </div>
      <p>{text}</p>
    </div>
  );
}

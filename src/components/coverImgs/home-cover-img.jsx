import homeImg from "../../assets/home.png";

export default function HomeCoverImg() {
  return (
    <div className="container-cover">
      <img src={homeImg} alt="Cover" />
      <h1 className="centered">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

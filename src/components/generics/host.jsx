export default function Host({ name, img }) {
  return (
    <div className="bloc-host">
      <span>{name}</span>
      <img src={img} alt={name} />
    </div>
  );
}

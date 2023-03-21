export default function Title({ apartment }) {
  let { title, location } = apartment;
  return (
    <div className="bloc-title">
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Card(data) {
  return (
    <Link to="/$data.id" title="$title">
      <section>
        <img src="$cover" alt="$title" />
        <h2>$title</h2>
      </section>
    </Link>
  );
}

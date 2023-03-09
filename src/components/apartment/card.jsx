import { Link } from "react-router-dom";

export default function Card(data) {
  return (
    <Link to="/$data.id" title="$data.title">
      <section>
        <img src="$data.cover" alt="$data.title" />
        <h2>$data.title</h2>
      </section>
    </Link>
  );
}

function Card(id, title, cover) {
  return (
    <a href="/$id" title="$title">
      <section>
        <img src="$cover" alt="$title" />
        <h2>$title</h2>
      </section>
    </a>
  );
}

export default Card;

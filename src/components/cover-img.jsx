export default function CoverImg(page) {
  if (page === "home") {
    return (
      <div className="container-cover">
        <img src="../assets/home.png" alt="Cover" />
        <h1 className="centered">Chez vous, partout et ailleurs</h1>
      </div>
    );
  } else if (page === "about") {
    return <img src="../assets/about.png" alt="Cover" />;
  } else {
    return <img src={page} alt="Cover" />;
  }
}

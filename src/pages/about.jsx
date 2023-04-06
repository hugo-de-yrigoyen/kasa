import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import BodyAbout from "../components/layout/body-about";
import "../styles/about.css";

export default function About() {
  return (
    <div className="bloc-page">
      <div className="bloc-about">
        <Header />
        <BodyAbout />
      </div>
      <Footer />
    </div>
  );
}

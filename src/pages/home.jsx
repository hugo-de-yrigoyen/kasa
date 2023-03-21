import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import HomeCoverImg from "../components/coverImgs/home-cover-img";
import Cards from "../components/apartment/cards";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="bloc-home">
      <Header />
      <HomeCoverImg />
      <Cards />
      <Footer />
    </div>
  );
}

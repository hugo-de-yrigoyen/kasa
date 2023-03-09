import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import CoverImg from "../components/cover-img";
import Cards from "../components/apartment/cards";
import "../styles/home.css";

export default function Home() {
  Header();
  CoverImg("home");
  Cards();
  Footer();
}

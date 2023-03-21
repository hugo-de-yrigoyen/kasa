import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import BodyError from "../components/layout/body-error";
import "../styles/error.css";

export default function ErrorPage() {
  return (
    <div>
      <Header />
      <BodyError />
      <Footer />
    </div>
  );
}

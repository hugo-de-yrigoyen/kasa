import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import BodyApartment from "../components/layout/body-apartment";

export default function Apartment() {
  return (
    <div className="bloc-page">
      <div className="bloc-apartment">
        <Header />
        <BodyApartment />
      </div>
      <Footer />
    </div>
  );
}

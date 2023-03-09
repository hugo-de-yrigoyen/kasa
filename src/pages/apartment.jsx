import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import BodyApartment from "../components/layout/body-apartment";

export default function Apartment() {
  const url = new URL(window.location.href);
  const id = new URLSearchParams(url.search).get("id");

  Header();
  BodyApartment(id);
  Footer();
}

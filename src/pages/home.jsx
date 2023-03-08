import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import HomeCoverImg from "../components/cover-img";
import Card from "../components/apartment/card";

export default function Home() {
  Header();
  HomeCoverImg();

  //fetching apartments from .json
  fetch("../datas/logements")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      //Creating apartments' cards from datas
      for (let i = 0; i < value.length; i++) {
        Card(value[i]);
      }
    })
    .catch(function (err) {
      console.log(err);
    });

  Footer();
}

import Header from "../components/header";
import HomeCoverImg from "../components/home-cover-img";
import Card from "../components/card";
import Footer from "../components/footer";

function Home() {
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
        Card(value[i].id, value[i].title, value[i].cover);
      }
    })
    .catch(function (err) {
      console.log(err);
    });

  Footer();
}

export default Home;

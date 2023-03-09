import { useState, useEffect } from "react";
import CoverImg from "../components/cover-img";
import Title from "../generics/title";
import Host from "../generics/host";
import Collapse from "../components/generics/collapse";
import Tag from "../components/generics/tag";
import Stars from "../components/generics/stars";
import "../styles/apartment.css";

export default function BodyApartment(id) {
  const [data, setData] = useState([]);
  //fetching apartments from .json
  const getData = () => {
    fetch("../datas/logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (res) {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  let i = 0;
  while (data[i].id !== { id } && i < data.length) {
    i++;
  }
  CoverImg(data[i].cover);
  Title(data[i].title, data[i].location);
  for (let n = 0; n < data.tags.length; n++) {
    Tag(data[i].tags[n]);
  }
  Host(data[i].host.name, data[i].host.picture);
  Stars(data[i].rating);
  Collapse("Description", data[i].description);
  Collapse("Équipements", data[i].equipments);
}

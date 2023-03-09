import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import HomeCoverImg from "../components/cover-img";
import "../styles/home.css";

export default function Home() {
  Header();
  HomeCoverImg();

  //fetching apartments from .json
  function Apartments() {
    const [data, setData] = useState([]);

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
    return (
      //Creating apartments' cards from datas
      <div className="bloc-apartments">
        {data &&
          data.length > 0 &&
          data.map((apartment) => (
            <Link to={apartment.id} title={apartment.title}>
              <section>
                <img src={apartment.cover} alt={apartment.title} />
                <h2>{apartment.title}</h2>
              </section>
            </Link>
          ))}
      </div>
      //for (let i = 0; i < value.length; i++) {Card(value[i]);}
    );
  }

  Apartments();
  Footer();
}

//import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../datas/logements.json";

export default function Card() {
  return (
    //Creating apartments' cards from datas
    <div className="bloc-apartments">
      {data &&
        data.length > 0 &&
        data.map((apartment) => (
          <Link
            to={`apartments/${apartment.id}`}
            title={apartment.title}
            key={apartment.id}>
            <section>
              <img src={apartment.cover} alt={apartment.title} />
              <h2>{apartment.title}</h2>
            </section>
          </Link>
        ))}
    </div>
  );
}

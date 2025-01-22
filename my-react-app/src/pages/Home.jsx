import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/card";
import properties from "../data/logements.json";
import "../styles/Pages/_index.scss";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="cards-container">
        {properties.map((property) => (
          // Enveloppe la carte dans un lien dynamique
          <Link
            key={property.id}
            to={`/housing/${property.id}`} // URL dynamique
            className="card-link"
          >
            <Card image={property.cover} title={property.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
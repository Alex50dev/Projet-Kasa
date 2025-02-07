import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/card";
import properties from "../data/logements.json";
import "../styles/Pages/_index.scss";

function Home() {
  return (
    <div className="home">
      {/* Utilisation du composant Banner avec l'image */}
      <Banner image="/image 1 projet Kasa.jpg" text="Chez vous, partout et ailleurs" />

      <div className="cards-container">
        {properties.map((property) => (
          <Link key={property.id} to={`/housing/${property.id}`} className="card-link">
            <Card image={property.cover} title={property.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
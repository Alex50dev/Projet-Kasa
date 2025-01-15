import React from "react";
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
          <Card
            key={property.id}
            image={property.cover}
            title={property.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
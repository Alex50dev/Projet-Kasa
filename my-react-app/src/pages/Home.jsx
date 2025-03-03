import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/card";
import properties from "../data/logements.json";
import "../styles/Pages/_index.scss";

function Home() {
  return (
    <div className="home">
      <Banner 
        image="/image 1 projet Kasa.jpg" 
        text="Chez vous, partout et ailleurs"
        alt="Paysage montrant un environnement accueillant"
      />
      
      {/* Conteneur avec fond gris */}
      <div className="cards-wrapper">
        <div className="cards-container">
          {properties.map((property) => (
            <Link 
              key={property.id} 
              to={`/housing/${property.id}`} 
              className="card-link"
              title={`Voir les détails de ${property.title}`}
            >
              <Card 
                image={property.cover} 
                title={property.title} 
                alt={`Photo de ${property.title}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
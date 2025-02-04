import React from "react";
import { useParams } from "react-router-dom"; // Pour accéder aux paramètres de l'URL
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse"; // Si vous avez un composant Collapse déjà fait
import properties from "../data/logements.json";

const HousingDetail = () => {
  const { id } = useParams(); // Récupérer l'ID de la propriété depuis l'URL
  const property = properties.find((item) => item.id === id);

  // Si l'ID ne correspond à aucune propriété, affiche une erreur
  if (!property) {
    return <h1>Propriété non trouvée</h1>;
  }

  return (
    <div className="housing-detail">
      {/* Carrousel d'images */}
      <Slideshow images={property.pictures} />

      <div className="housing-detail-header">
        {/* Bloc gauche : titre, adresse et tags */}
        <div className="housing-info">
          <h1>{property.title}</h1>
          <p className="housing-location">{property.location}</p>
          <div className="tags">
            {property.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bloc droit : utilisateur et étoiles */}
        <div className="housing-owner">
          <div className="owner-info">
            <p>{property.host.name}</p>
            <img
              src={property.host.picture}
              alt={`Propriétaire ${property.host.name}`}
              className="owner-picture"
            />
          </div>
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`star ${i < property.rating ? "filled" : ""}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sections collapsibles */}
      <div className="housing-detail-collapses">
        <Collapse title="Description">{property.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {property.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default HousingDetail;
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
      <Slideshow 
        images={property.pictures} 
        alt={`Images de ${property.title}`} 
      />

      <div className="housing-detail-header">
        <div className="housing-info">
          <h1 title={`Titre du logement : ${property.title}`}>{property.title}</h1>
          <p className="housing-location">{property.location}</p>
          
          {/* Tags sous l'adresse */}
          <div className="tags">
            {property.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Infos propriétaire */}
        <div className="housing-detail-owner">
          <div className="owner-info">
            <p>{property.host.name}</p>
            <img
              src={property.host.picture}
              alt={`Photo du propriétaire ${property.host.name}`}
              className="owner-picture"
              title={`Propriétaire : ${property.host.name}`}
            />
          </div>

          {/* Notation en étoiles */}
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`star ${i < property.rating ? "filled" : ""}`}
                title={`Note : ${property.rating}/5`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sections collapsibles */}
      <div className="housing-detail-collapses">
        <Collapse 
          className="housing-collapse" 
          title="Description"
          titleAttr="Afficher la description du logement"
        >
          {property.description}
        </Collapse>

        <Collapse 
          className="housing-collapse" 
          title="Équipements"
          titleAttr="Afficher la liste des équipements"
        >
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
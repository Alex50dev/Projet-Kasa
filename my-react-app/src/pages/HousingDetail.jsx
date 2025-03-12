import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Ajout de useNavigate
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import properties from "../data/logements.json";

const HousingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook pour rediriger
  const property = properties.find((item) => item.id === id);

  // Si l'ID ne correspond à aucune propriété, rediriger vers NotFound
  useEffect(() => {
    if (!property) {
      navigate("/NotFound", { replace: true });
    }
  }, [property, navigate]);

  // Empêche l'affichage du composant si la redirection est en cours
  if (!property) return null;

  return (
    <div className="housing-detail">
      <Slideshow images={property.pictures} alt={`Images de ${property.title}`} />
      
      <div className="housing-detail-header">
        <div className="housing-info">
          <h1 title={`Titre du logement : ${property.title}`}>{property.title}</h1>
          <p className="housing-location">{property.location}</p>
          <div className="tags">
            {property.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

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

      <div className="housing-detail-collapses">
        <Collapse title="Description" titleAttr="Afficher la description du logement">
          {property.description}
        </Collapse>

        <Collapse title="Équipements" titleAttr="Afficher la liste des équipements">
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
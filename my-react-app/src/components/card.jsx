import React from "react";
import "../styles/components/_Card.scss";

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2 className="card-title">{title}</h2> {/* Vérifie que le titre est bien là */}
    </div>
  );
};

export default Card;
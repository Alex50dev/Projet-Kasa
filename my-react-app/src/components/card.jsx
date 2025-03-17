import React from "react";
import "../styles/components/_card.scss";

const Card = ({ image, title }) => {
  return (
    <div className="card" aria-label={`Carte contenant ${title}`}>
      <img src={image} alt={title} title={title} role="img" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default Card;
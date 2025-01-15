import React from "react";
import "../styles/components/_card.scss";

function Card({ image, title }) {
    return (
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-title">{title}</div>
      </div>
    );
  }

export default Card;
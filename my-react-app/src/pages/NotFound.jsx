import React from "react";
import { Link } from "react-router-dom";
import "../styles/Pages/_NotFound.scss";

const NotFound = () => {
  return (
    <div className="notfound-container">
      {/* Ajout de l'image 404 */}
      <img src="/404.png" alt="404 Not Found" className="notfound-404"/>
      
      <p className="notfound-text">
        Oups! La page que <br /> vous demandez n'existe pas.
      </p>
      <Link to="/" className="notfound-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;
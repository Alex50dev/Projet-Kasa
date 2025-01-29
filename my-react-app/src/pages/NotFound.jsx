import React from "react";
import { Link } from "react-router-dom";
import "../styles/Pages/_NotFound.scss"; // Assure-toi d'avoir ce fichier

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-404">404</h1>
      <p className="notfound-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="notfound-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;
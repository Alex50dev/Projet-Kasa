import React from "react";
import { Link } from "react-router-dom";
import "../styles/Pages/_NotFound.scss";

const NotFound = () => {
  return (
    <div className="notfound-container">
      {/* Ajout de l'image 404 avec accessibilité */}
      <img 
        src="/404.png" 
        alt="Erreur 404 - Page introuvable" 
        className="notfound-404" 
        role="img" 
        aria-label="Erreur 404 - Page introuvable"
      />
      
      <p className="notfound-text" title="Message d'erreur indiquant que la page est introuvable">
        Oups! La page que <br /> vous demandez n'existe pas.
      </p>

      {/* Lien avec un title pour l’accessibilité */}
      <Link to="/" className="notfound-link" title="Retourner sur la page d'accueil">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;
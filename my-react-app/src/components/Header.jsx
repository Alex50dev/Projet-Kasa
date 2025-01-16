import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/_header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Kasa</Link>
      </div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À Propos</Link>
      </nav>
    </header>
  );
};

export default Header;
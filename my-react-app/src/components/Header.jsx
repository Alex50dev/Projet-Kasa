import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/_header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>
          <span>K</span>
          <span className="logo__icon">🏠</span>
          <span>asa</span>
        </h1>
      </div>
      <nav className="header__nav">
        <Link to="/" className="nav__link">
          Accueil
        </Link>
        <Link to="/about" className="nav__link">
          À Propos
        </Link>
      </nav>
    </header>
  );
};


export default Header;
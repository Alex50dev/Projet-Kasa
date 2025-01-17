import React from "react";
import "../styles/components/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          src="/path-to-your-logo/logo-white.png" // Remplacez par le chemin réel de votre logo blanc
          alt="Kasa Logo"
          className="footer-logo"
        />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
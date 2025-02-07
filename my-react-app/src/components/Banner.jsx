import React from "react";
import "../styles/components/_Banner.scss";

const Banner = ({ image, text }) => {
  const bannerStyle = {
    backgroundImage: `url("${image}")`, // Ajout des guillemets pour éviter les erreurs d'espaces
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="banner" style={bannerStyle}>
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;
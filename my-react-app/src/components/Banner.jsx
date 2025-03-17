import React from "react";
import "../styles/components/_banner.scss";

const Banner = ({ image, text }) => {
  const bannerStyle = {
    backgroundImage: `url("${image}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="banner" style={bannerStyle} role="img" aria-label={text}>
      <h1 title={text}>{text}</h1>
    </div>
  );
};

export default Banner;
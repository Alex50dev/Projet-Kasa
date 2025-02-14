import React, { useState } from "react";
import "../styles/components/_slideshow.scss"; // Ajoutez les styles ici

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow-image" />

      {/* Flèche gauche */}
      {images.length > 1 && (
        <button className="slideshow-arrow left" onClick={handlePrev}>
          <img src="/Fléche gauche carrousel.png" alt="Flèche gauche" />
        </button>
      )}

      {/* Flèche droite */}
      {images.length > 1 && (
        <button className="slideshow-arrow right" onClick={handleNext}>
          <img src="/Fléche droite carrousel.png" alt="Flèche droite" />
        </button>
      )}

      {/* Numérotation */}
      {images.length > 1 && <p className="slideshow-counter">{currentIndex + 1} / {images.length}</p>}
    </div>
  );
};


export default Slideshow;
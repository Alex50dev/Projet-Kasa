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
      {/* Image affichée */}
      <img 
        src={images[currentIndex]} 
        alt={`Image ${currentIndex + 1} sur ${images.length}`} 
        className="slideshow-image" 
        aria-live="polite"
      />

      {/* Flèche gauche */}
      {images.length > 1 && (
        <button className="slideshow-arrow left" onClick={handlePrev} aria-label="Image précédente">
          <img src="/Fléche gauche carrousel.png" alt="Flèche gauche" />
        </button>
      )}

      {/* Flèche droite */}
      {images.length > 1 && (
        <button className="slideshow-arrow right" onClick={handleNext} aria-label="Image suivante">
          <img src="/Fléche droite carrousel.png" alt="Flèche droite" />
        </button>
      )}

      {/* Numérotation affichée uniquement si plusieurs images */}
      {images.length > 1 && (
        <p className="slideshow-counter">
          <span>{currentIndex + 1}</span> / <span>{images.length}</span>
        </p>
      )}
    </div>
  );
};

export default Slideshow;
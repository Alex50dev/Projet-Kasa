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
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={handlePrev}>❮</button>
      <button onClick={handleNext}>❯</button>
    </div>
  );
};

export default Slideshow;
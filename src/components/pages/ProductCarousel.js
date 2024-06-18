// ProductCarousel.js
import React, { useState } from 'react';
import './Products.css';

const ProductCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn" onClick={prevImage}>‹</button>
      <img src={images[currentIndex]} alt="Product" className="carousel-image" />
      <button className="carousel-btn" onClick={nextImage}>›</button>
    </div>
  );
};

export default ProductCarousel;

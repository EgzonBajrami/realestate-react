import React from "react";
import './CarouselSection.css';

const CarouselSection = ({ children }) => {
  return (
    <section
   className="carousel-section"
  >
    {children}
  </section>
  );
};

export default CarouselSection;
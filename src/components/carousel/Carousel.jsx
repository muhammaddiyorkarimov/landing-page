import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <div className="carousel-slide prev-slide" key={prevIndex}>
          <img src={images[prevIndex]} alt={`Slide ${prevIndex + 1}`} />
        </div>
        <div className="carousel-slide current-slide" key={currentIndex}>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          <div className="carousel-text">
            <h2>Biz bilan o'z biznesingni rivojlantiring.</h2>
            <p>Har qanday biznesni Avtomatlashtiramiz! 7 kunda tizimni o'rnatib, xodimlaringizni tayyorlab beramiz +365 kunlik support (video materiallar orqali).</p>
          </div>
        </div>
        <div className="carousel-slide next-slide" key={nextIndex}>
          <img src={images[nextIndex]} alt={`Slide ${nextIndex + 1}`} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

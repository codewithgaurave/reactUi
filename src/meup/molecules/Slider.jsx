import React, { useState } from 'react';
import './Slider.css';

const ImageSlider = () => {
  const slides = [
    {
      image: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/ev7.jpg',
      title: 'The 2020 Global Education Conference',
      subtitle: '#education #food',
    },
    {
      image: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/event-bg-5.jpg',
      title: 'Healthcare Innovations Summit',
      subtitle: '#health #innovation',
    },
    {
      image: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/e24.jpg',
      title: 'Healthcare Innovations Summit',
      subtitle: '#health #innovation',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          <div className="overlay"></div>
          <img src={slide.image} alt={slide.title} />
          <div className="content">
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
            <button>More Info</button>
          </div>
        </div>
      ))}

      <div className="slider-buttons">
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default ImageSlider;

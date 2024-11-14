import React from 'react';
import './Whatdo.css';

const services = [
  { title: 'HOME CONSTRUCTION', icon: 'https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon1.png', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat' },
  { title: 'EXTERIOR DESIGN', icon: 'https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon4.png', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat' },
  { title: 'BUILDING REMODELS', icon: 'https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon2.png', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat' },
  { title: 'RENOVATION', icon: 'https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon5.png', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat' },
  { title: 'INTERIOR DESIGN', icon: 'https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon3.png', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat' },
  { title: 'SAFETY MANAGEMENT', icon: 'https://demo.themefisher.com/constra-bootstrap/images/icon-image/service-icon6.png', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat' },
];

const WhatWedo = () => {
  const leftServices = services.slice(0, 3);  // First three services
  const rightServices = services.slice(3, 6); // Last three services

  return (
    <div className="what-we-do-section">
      <h2 className="section-title-do">We are specialists in <br/><strong>WHAT WE DO</strong></h2>
      <div className="services-container">
        {/* Left services */}
        <div className="left-services services-list">
          {leftServices.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon"><img src={service.icon} alt='image'/></div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="image-container">
          <img
            src="https://demo.themefisher.com/constra-bootstrap/images/services/service-center.jpg" 
            alt="Worker"
            className="worker-image"
          />
        </div>

        {/* Right services */}
        <div className="right-services services-list">
          {rightServices.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon"><img src={service.icon} alt='image'/></div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWedo;

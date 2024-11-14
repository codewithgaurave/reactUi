import React from "react";
import "./Sponcers.css";

const Sponsors = () => {
  return (
    <div className="sponsorsMain">
      <div className="sponsor-content">
        <h1>
          Our <span className="highlight">Sponsors</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="sponsor-section">
        <h2 className="section-title-sponcers">Platinum Sponsors</h2>
        <div className="sponsor-row">
          <div className="sponsor-box">
            <img src="https://demo.themefisher.com/eventre-bootstrap/images/sponsors/pt-spon-four.png" alt="Sponsor Logo" />
          </div>
          <div className="sponsor-box">
            <img src="https://demo.themefisher.com/eventre-bootstrap/images/sponsors/pt-spon-two.png" alt="Sponsor Logo" />
          </div>
          <div className="sponsor-box">
            <img src="https://demo.themefisher.com/eventre-bootstrap/images/sponsors/pt-spon-three.png" alt="Sponsor Logo" />
          </div>
          <div className="sponsor-box">
            <img src="https://demo.themefisher.com/eventre-bootstrap/images/sponsors/pt-spon-two.png" alt="Sponsor Logo" />
          </div>
        </div>

        <h2 className="section-title-sponcers">Gold Sponsors</h2>
        <div className="sponsor-row">
          <div className="sponsor-box">
            <img src="https://demo.themefisher.com/eventre-bootstrap/images/sponsors/gl-spon-one.png" alt="Sponsor Logo" />
          </div>
          <div className="sponsor-box">
            <img src="https://demo.themefisher.com/eventre-bootstrap/images/sponsors/gl-spon-two.png" alt="Sponsor Logo" />
          </div>
          <div className="sponsor-box">
            <img src="https://demo.themefisher.com/eventre-bootstrap/images/sponsors/gl-spon-three.png" alt="Sponsor Logo" />
          </div>
        </div>
      </div>

      <div className="sponsor-button-container">
        <button className="sponsor-button">Become a Sponsor</button>
      </div>
    </div>
  );
};

export default Sponsors;

import React from "react";
import "./Subscribe.css"; // Link to your CSS file

const Subscribe = () => {
  return (
    <>
    <div className="subscribe-container">
      <div className="subscribe-text">
        <h2>Subscribe to Our <span className="highlight">Newsletter</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</p>
      </div>
      <div className="subscribe-form-container">
        <form className="subscribe-form">
          <input
            type="email"
            placeholder="Email"
          />
          <button type="submit" className="subscribe-button">SUBSCRIBE</button>
        </form>
      </div>
    </div>
    <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200234.1683535759!2d80.77769893768958!3d26.84890282945929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1729352940480!5m2!1sen!2sin"
            height="550"
            width="1466px"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
              <div className="location-card">
      <h2>Docklands Convention</h2>
      <div className="location-details">
        <div className="location-item">
          <span className="icon">🏠</span> 
          <span className="textLocation">Street Address, Location, City, Country.</span>
        </div>
        <div className="location-item">
          <span className="icon">📞</span> 
          <span className="textLocation">9696559848</span>
        </div>
      </div>
      <button className="get-direction-button">GET DIRECTION</button>
    </div>
    </div>

    </>
  );
};

export default Subscribe;

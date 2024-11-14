import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-section logo">
            <h2>
              <img src="https://demo.ovathemewp.com/meup/wp-content/uploads/2019/06/Asset-8.svg"/>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, conse ctetue adipiscing eli sed diam
              nonum nibhie...
            </p>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-x-twitter"></i>
            </div>
          </div>

          <div
            className="footer-section about"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h3>About Us</h3>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>About Us</li>
              <li>Submit Event</li>
              <li>All Venues</li>
              <li>All Locations</li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>San Francisco City Hall, San Francisco, CA</li>
              <li>
                Email:{" "}
                <a href="mailto:digitalgurucse@gmail.com">contact@domain.com</a>
              </li>
              <li>Phone: +9696559848</li>
            </ul>
          </div>

          <div className="footer-section download">
            <h3>Download APP</h3>
            <div
              className="app-buttons"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <img
                src="https://demo.ovathemewp.com/meup/wp-content/uploads/elementor/thumbs/apple-store-1-qipooaikmsq92ncdzymohq3tie624bio70q81snj0g.png"
                alt="Download on the App Store"
              />
              <img
                src="https://demo.ovathemewp.com/meup/wp-content/uploads/elementor/thumbs/google_play-1-qipooaikmsq92ncdzymohq3tie624bio70q81snj0g.png"
                alt="Get it on Google Play"
              />
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottomss">
        <p>&copy; 2021 ovatheme. All Rights Reserved.</p>
        <p>Terms of Use | Privacy Policy</p>
      </div>
    </>
  );
};

export default Footer;

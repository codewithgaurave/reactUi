import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footereventure">
      <div className="footer-content">
        <h2 className="footer-logos">
          Even<span className="highlight">tre</span>
        </h2>
        <div className="social-icons-eventure">
          <a><i class="fab fa-facebook"></i></a>
          <a><i className="fab fa-twitter"></i></a>
          <a><i className="fab fa-instagram"></i></a>
          <a><i className="fab fa-rss"></i></a>
          <a><i className="fab fa-vimeo"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Eventre © 2024, Designed & Developed by{" "}
          <a>Gaurav Gupta</a>
        </p>
      </div>
      <div className="scroll-up">
        <a href="#top"><i className="fas fa-chevron-up"></i></a>
      </div>
    </footer>
  );
};

export default Footer;

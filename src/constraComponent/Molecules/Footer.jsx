import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-section">
              <h3>ABOUT US</h3>
              <img src="https://demo.themefisher.com/constra-bootstrap/images/footer-logo.png" alt="Constra Logo" className="footer-logo" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="social-icons">
                <li>
                  <i class="fa-brands fa-facebook-f"></i>
                </li>
                <li>
                <i class="fa-brands fa-twitter"></i>
                </li>
                <li>
                <i class="fa-brands fa-linkedin-in"></i>
                </li>
                <li>
                <i class="fa-brands fa-github"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-section">
              <h3>WORKING HOURS</h3>
              <p>
                We work 7 days a week, every day excluding major holidays.
                Contact us if you have an emergency, with our Hotline and Contact
                form.
              </p>
              <ul className="working-hours">
                <li>Monday - Friday: 10:00 - 16:00</li>
                <li>Saturday: 12:00 - 15:00</li>
                <li>Sunday and holidays: 09:00 - 12:00</li>
              </ul>
            </div> </div>
          <div className="col-md-4">
            <div className="footer-section">
              <h3>Service</h3>
              <p><i class="fa-solid fa-angle-right"></i>Pre-Construction</p>
              <p><i class="fa-solid fa-angle-right"></i>Self-Perform Construction</p>
              <p><i class="fa-solid fa-angle-right"></i>General Contracting</p>
              <p><i class="fa-solid fa-angle-right"></i>Construction Management</p>
              <p><i class="fa-solid fa-angle-right"></i>Design and Build</p>
            </div>
          </div>
        </div>
      </div>
      <div className='footerBottomConstra'>
      <span>Copyright © <script>
                  document.write(new Date().getFullYear())
                </script>2024, Designed &amp; Developed by <a>Gaurav Gupta</a></span>
      </div>
    </footer>
  );
};

export default Footer;
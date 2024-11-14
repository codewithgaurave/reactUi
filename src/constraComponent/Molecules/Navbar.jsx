import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="navbarConstra">
        <div className="topNav">
          <div className="addRess">
            <span>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 9051 Constra
              Incorporate, USA
            </span>
          </div>
          <div className="iconsSocial">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
      </header>
      <div className="middleNav">
        <div className="logoConstra">
          <img
            src="https://demo.themefisher.com/constra-bootstrap/images/logo.png"
            alt="logo"
          />
        </div>
        <div className="detailContact">
          <div className="callUs">
            <p>Call Us</p>
            <p className="bold">9696559848</p>
          </div>
          <div className="emailUs">
            <p>Email Us</p>
            <p className="bold">digitalgurucse@gmail.com</p>
          </div>
          <div className="globalCertificate">
            <p>Global Certificate</p>
            <p className="bold">ISO : 9000 123456</p>
          </div>
          <div className="buttonQuote">
            <p>Get a Quote.</p>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="menu-item">
            HOME<i className="fa fa-angle-down"></i>
            <ul className="dropdown-menu">
              <li>Home Page One</li>
              <li><Link to="/meuphome" style={{textDecoration:'none',color:'black'}}>MeUp</Link></li>
            </ul>
          </li>
          <li className="menu-item">
            COMPANY<i className="fa fa-angle-down"></i>
            <ul className="dropdown-menu">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Testimonials</li>
              <li>Faq</li>
              <li>Pricing</li>
            </ul>
          </li>
          <li className="menu-item">
            PROJECTS<i className="fa fa-angle-down"></i>
            <ul className="dropdown-menu">
              <li>Project One</li>
              <li>Project All</li>
            </ul>
          </li>
          <li className="menu-item">
            SERVICES<i className="fa fa-angle-down"></i>
            <ul className="dropdown-menu">
              <li>Service One</li>
              <li>Service All</li>
            </ul>
          </li>
          <li className="menu-item">
            FEATURES<i className="fa fa-angle-down"></i>
            <ul className="dropdown-menu">
              <li>Typography</li>
              <li>404</li>
            </ul>
          </li>
          <li className="menu-item">
            NEWS<i className="fa fa-angle-down"></i>
            <ul className="dropdown-menu">
              <li>News Left Sidebar</li>
              <li>News Right Sidebar</li>
              <li>News Single</li>
            </ul>
          </li>
          <li className="menu-item">
            CONTACT<i className="fa fa-angle-down"></i>
          </li>
          <li className="menu-item search-icon">
            <span role="img" aria-label="search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

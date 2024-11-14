import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navBar'>
      <div className='logo'>
        <img src='https://demo.themefisher.com/eventre-bootstrap/images/logo.png' alt='nav-logo' />
      </div>

      <div className={`navLinks ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li className="dropdown">
            Home<i className="fa fa-angle-down"></i><span>/</span>
            <ul className="dropdown-menu">
              <li>Home</li>
              <li ><Link to='/constra' style={{textDecoration:'none' , color:'black'}}>Constra</Link></li>
              <li ><Link to='/meuphome' style={{textDecoration:'none' , color:'black'}}>MeUp</Link></li>
            </ul>
          </li>
          <li>Speakers<span>/</span></li>
          <li className='dropdown'>Pages<i className="fa fa-angle-down"></i><span>/</span>
            <ul className='dropdown-menu'>
                <li>About</li>
                <li>Single Speacker</li>
                <li>Gallery</li>
                <li>Gallery-02</li>
                <li>Testimonial</li>
                <li>FAQ</li>
                <li>Pricing</li>
                <li>404</li>
            </ul>
          </li>
          <li>Schedule<span>/</span></li>
          <li>Sponsors<span>/</span></li>
          <li className='dropdown'>News<i className="fa fa-angle-down"></i><span>/</span>
            <ul className='dropdown-menu'>
              <li>News-1</li>
              <li>News-02</li>
            </ul>
          </li>
          <li>Contact<span>/</span></li>
        </ul>
      </div>

      <div className='lastNavbar'>
        <div>
          <img src='https://demo.themefisher.com/eventre-bootstrap/images/icon/ticket.png' alt='ticket-icon' />
        </div>
        <div className='textNavbar'>
          <p>BUY TICKET</p>
        </div>
      </div>

      <div className='menu-btn' onClick={toggleMenu}>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

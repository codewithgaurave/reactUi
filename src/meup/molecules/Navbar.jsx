import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbarmeup ${isSticky ? 'sticky' : ''}`}>
      <div className="logo">
        <img src="https://demo.ovathemewp.com/meup/wp-content/uploads/2019/06/Asset-8.svg" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><span href="#home">Home<i class="fa-solid fa-chevron-down"></i></span></li>
        <li><span href="#listing">Listing<i class="fa-solid fa-chevron-down"></i></span></li>
        <li><span href="#page">Page<i class="fa-solid fa-chevron-down"></i></span></li>
        <li><span href="#blog">Blog<i class="fa-solid fa-chevron-down"></i></span></li>
        <li><span href="#login" style={{borderRight:'2px solid gray',paddingRight:'15px'}}><i class="fa-regular fa-user"></i>Login</span></li>
        <li><span href="#register">Register</span></li>
      <button className="create-event">+ Create Event</button>
      </ul>
    </nav>
  );
};

export default Navbar;

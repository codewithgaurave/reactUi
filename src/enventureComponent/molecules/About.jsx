import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='mainAbout'>
      <div className='aboutImage'>
        <img src='https://demo.themefisher.com/eventre-bootstrap/images/speakers/featured-speaker.jpg' alt='img' /> {/* Update the path here */}
      </div>
      <div className='aboutContent'>
        <h2>About The <span className="alternate">Eventre</span></h2><hr/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.</p>
        <p className='txtAbout'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.</p>
        <div className='buttonAbout'>
          <button className='buyTicketBtn'><span>Buy Ticket</span></button>
          <button className='readMoreBtn'><span>Read more</span></button>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import './Speacking.css';

const speakers = [
  { name: 'Johnathan Franco', role: 'Project Manager', imgSrc: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-one.jpg' },
  { name: 'Johnathan Franco', role: 'Project Manager', imgSrc: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-two.jpg' },
  { name: 'Johnathan Franco', role: 'Project Manager', imgSrc: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-three.jpg' },
  { name: 'Johnathan Franco', role: 'Project Manager', imgSrc: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-four.jpg' },
  { name: 'Johnathan Franco', role: 'Project Manager', imgSrc: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-five.jpg' },
  { name: 'Johnathan Franco', role: 'Project Manager', imgSrc: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-six.jpg' },
  { name: 'Johnathan Franco', role: 'Project Manager', imgSrc: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-five.jpg' },
  { name: 'Johnathan Franco', role: 'Project Manager', imgSrc: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-six.jpg' },
];

const Speacking = () => {
  return (
    <div className='speackingSection'>
      <div className='sectionTitle'>
        <h2>Who <span>Speaking?</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
      </div>
      
      <div className='speakersGrid'>
        {speakers.map((speaker, index) => (
          <div className='speakerCard' key={index}>
            <img src={speaker.imgSrc} alt={speaker.name} />
            <div className='speakerInfo'>
              <h3>{speaker.name}</h3>
              <p>{speaker.role}</p>
            </div>

            <div className="overlay">
              <div className="overlayContent">
                <div className="overlayItem"><i class="fa-brands fa-facebook"></i></div>
                <div className="overlayItem"><i class="fa-brands fa-linkedin"></i></div>
                <div className="overlayItem"><i class="fa-brands fa-square-twitter"></i></div>
                <div className="overlayItem"><i class="fa-brands fa-pix"></i></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speacking;

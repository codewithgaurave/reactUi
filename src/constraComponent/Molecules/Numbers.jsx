import React from 'react';
import './Number.css';

const Numbers = () => {
  const statistics = [
    { icon: 'https://demo.themefisher.com/constra-bootstrap/images/icon-image/fact1.png', number: 1789, label: 'TOTAL PROJECTS' },
    { icon: 'https://demo.themefisher.com/constra-bootstrap/images/icon-image/fact2.png', number: 647, label: 'STAFF MEMBERS' },
    { icon: 'https://demo.themefisher.com/constra-bootstrap/images/icon-image/fact3.png', number: 4000, label: 'HOURS OF WORK' },
    { icon: 'https://demo.themefisher.com/constra-bootstrap/images/icon-image/fact4.png', number: 44, label: 'COUNTRIES EXPERIENCE' },
  ];

  return (
    <div className="statistics-section">
      {statistics.map((stat, index) => (
        <div key={index} className="stat-item">
          <img src={stat.icon} alt='icon' className='stat-icon'/>
          <h3 className="stat-number">{stat.number}</h3>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Numbers;

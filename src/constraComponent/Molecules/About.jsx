import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const valuesData = [
    {
      title: 'SAFETY',
      content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata',
    },
    {
      title: 'CUSTOMER SERVICE',
      content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata',
    },
    {
      title: 'INTEGRITY',
      content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata',
    },
  ];

  return (
    <div className="about-us-section">
      <div className="about-left">
        <h2>ABOUT US</h2>
        <h1>WE DELIVER LANDMARK PROJECTS</h1>
        <p>
          We are rhetoric question ran over her cheek When she reached the first hills of the Italic Mountains, she had a
          last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of
          her own road, the Line Lane.
        </p>

        <div className="features">
          <div className="feature-item">
            <span className="icon"><i class="fa-solid fa-trophy"></i></span>
            <p>WE'VE REPUTATION FOR EXCELLENCE</p>
          </div>
          <div className="feature-item">
            <span className="icon"><i class="fa-solid fa-sliders"></i></span>
            <p>WE BUILD PARTNERSHIPS</p>
          </div>
          <div className="feature-item">
            <span className="icon"><i class="fa-solid fa-thumbs-up"></i></span>
            <p>GUIDED BY COMMITMENT</p>
          </div>
          <div className="feature-item">
            <span className="icon"><i class="fa-solid fa-thumbs-up"></i></span>
            <p>A TEAM OF PROFESSIONALS</p>
          </div>
        </div>
      </div>

      <div className="about-right">
        <h2>OUR VALUES</h2>
        <p>
          Minim Austin 3 wolf moon scenester aesthetic, umami odio pariatur bitters. Pop-up occaecat taxidermy street art,
          tattooed beard literally.
        </p>

        {valuesData.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <h3>{item.title}</h3>
              <span className="accordion-icon">
                {activeIndex === index ? '▲' : '▼'}
              </span>
            </div>
            <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

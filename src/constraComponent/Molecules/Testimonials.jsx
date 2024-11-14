import React, { useState } from 'react';
import './Tesimonial.css';

const testimonials = [
  {
    quote: "Question ran over her cheek when she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove.",
    author: "Gabriel Denis",
    position: "Chairman, OKT",
    image: "https://i.pravatar.cc/100?img=3" 
  },
  {
    quote: "Far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    author: "John Smith",
    position: "CEO, TechCorp",
    image: "https://i.pravatar.cc/100?img=5"
  },
  {
    quote: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    author: "Emily Johnson",
    position: "Founder, MediaWorks",
    image: "https://i.pravatar.cc/100?img=6"
  }
];

const clients = [
  { logo: 'https://demo.themefisher.com/constra-bootstrap/images/clients/client1.png', alt: 'Techno Line' },
  { logo: 'https://demo.themefisher.com/constra-bootstrap/images/clients/client2.png', alt: 'Montorin' },
  { logo: 'https://demo.themefisher.com/constra-bootstrap/images/clients/client3.png', alt: 'Arrow Market' },
  { logo: 'https://demo.themefisher.com/constra-bootstrap/images/clients/client4.png', alt: 'MaxinGraphic' },
  { logo: 'https://demo.themefisher.com/constra-bootstrap/images/clients/client5.png', alt: 'Sontara' },
  { logo: 'https://demo.themefisher.com/constra-bootstrap/images/clients/client6.png', alt: 'Altra Technolgy' }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-slider">
        <h2 className="section-titles">TESTIMONIALS</h2>
        <div className="testimonial-quote">
          <div className="quote-icon">❝</div>
          <p>{testimonials[currentTestimonial].quote}</p>
        </div>
        <div className="testimonial-author">
          <img
            src={testimonials[currentTestimonial].image}
            alt={testimonials[currentTestimonial].author}
            className="author-image"
          />
          <div>
            <h4>{testimonials[currentTestimonial].author}</h4>
            <p>{testimonials[currentTestimonial].position}</p>
          </div>
        </div>
        <div className="slider-controls">
          <button onClick={prevTestimonial}>◀</button>
          <button onClick={nextTestimonial}>▶</button>
        </div>
      </div>

      <div className="happy-clients">
        <h2 className="section-title">HAPPY CLIENTS</h2>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-logo">
              <img src={client.logo} alt={client.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

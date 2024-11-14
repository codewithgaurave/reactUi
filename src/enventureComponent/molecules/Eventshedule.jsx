import React, { useState } from 'react';
import './Eventshedule.css';

const EventSchedule = () => {
  const [selectedDay, setSelectedDay] = useState('DAY-01');

  const eventData = {
    'DAY-01': [
      { time: '9:00 AM', speaker: 'Samanta Doe', subject: 'Introduction to WP', venue: 'Auditorium A', image: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-one.jpg' },
      { time: '10:00 AM', speaker: 'Zerad Pawel', subject: 'Principle of WP', venue: 'Auditorium B', image: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-two.jpg' },
      { time: '12:00 PM', speaker: 'Henry Mong', subject: 'WP Requirements', venue: 'Auditorium C', image: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-three.jpg' },
      { time: '2:00 PM', speaker: 'Baily Leo', subject: 'Advanced WP', venue: 'Auditorium D', image: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-four.jpg' },
      { time: '3:00 PM', speaker: 'Lee Mun', subject: 'Useful Tips for WP', venue: 'Auditorium E', image: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-five.jpg' },
    ],
    'DAY-02': [
      { time: '3:00 PM', speaker: 'Lee Mun', subject: 'Useful Tips for WP', venue: 'Auditorium E', image: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-five.jpg' },
      { time: '10:00 AM', speaker: 'Zerad Pawel', subject: 'Principle of WP', venue: 'Auditorium B', image: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-two.jpg' },
      { time: '9:00 AM', speaker: 'Samanta Doe', subject: 'Introduction to WP', venue: 'Auditorium A', image: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-one.jpg' },
      { time: '2:00 PM', speaker: 'Baily Leo', subject: 'Advanced WP', venue: 'Auditorium D', image: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-four.jpg' },
      { time: '12:00 PM', speaker: 'Henry Mong', subject: 'WP Requirements', venue: 'Auditorium C', image: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-three.jpg' },
    ],
    'DAY-03': [
      { time: '12:00 PM', speaker: 'Henry Mong', subject: 'WP Requirements', venue: 'Auditorium C', image: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-three.jpg' },
      { time: '10:00 AM', speaker: 'Zerad Pawel', subject: 'Principle of WP', venue: 'Auditorium B', image: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-two.jpg' },
      { time: '9:00 AM', speaker: 'Samanta Doe', subject: 'Introduction to WP', venue: 'Auditorium A', image: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-one.jpg' },
      { time: '3:00 PM', speaker: 'Lee Mun', subject: 'Useful Tips for WP', venue: 'Auditorium E', image: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-five.jpg' },
      { time: '2:00 PM', speaker: 'Baily Leo', subject: 'Advanced WP', venue: 'Auditorium D', image: 'https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-four.jpg' },
    ],
  };

  return (
    <div className="event-schedule">
      <h2 className="schedule-title">Event <span className="highlight">Schedule</span></h2>
      <p className="schedule-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusm tempor incididunt ut labore.
      </p>

      <div className="date-selector">
        <button
          className={`date-btn ${selectedDay === 'DAY-01' ? 'active' : ''}`}
          onClick={() => setSelectedDay('DAY-01')}
        >
          DAY-01<br /><span>20 NOVEMBER 2024</span>
        </button>
        <button
          className={`date-btn ${selectedDay === 'DAY-02' ? 'active' : ''}`}
          onClick={() => setSelectedDay('DAY-02')}
        >
          DAY-02<br /><span>21 NOVEMBER 2024</span>
        </button>
        <button
          className={`date-btn ${selectedDay === 'DAY-03' ? 'active' : ''}`}
          onClick={() => setSelectedDay('DAY-03')}
        >
          DAY-03<br /><span>22 NOVEMBER 2014</span>
        </button>
      </div>

      <div className="schedule-table">
        <div className="table-header">
          <div className="table-col time-col">TIME</div>
          <div className="table-col speaker-col">SPEAKER</div>
          <div className="table-col subject-col">SUBJECT</div>
          <div className="table-col venue-col">VENUE</div>
        </div>

        {eventData[selectedDay].map((event, index) => (
          <div key={index} className="table-row">
            <div className="table-col time-col">{event.time}</div>
            <div className="table-col speaker-col">
              <img src={event.image} alt={event.speaker} className="speaker-image" />
              <span>{event.speaker}</span>
            </div>
            <div className="table-col subject-col">{event.subject}</div>
            <div className="table-col venue-col">{event.venue}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSchedule;

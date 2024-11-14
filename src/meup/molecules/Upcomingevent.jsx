import React, { useState } from 'react';
import './Upcomingevent.css';

const eventsData = [
  {
    id: 1,
    category: 'Education',
    title: 'Affiliate – External Link',
    date: 'Thu, September 28, 2028, 7:30 am',
    location: 'Fresno, California',
    price: '$79',
    imageUrl: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/06/Yoga-online-710x480.jpg',
    liked: false,
    profileImage:"https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/about_team_2-1-150x150.jpg"
  },
  {
    id: 2,
    category: 'Concert',
    title: 'Seat Map',
    date: 'Fri, October 25, 2024, 1:00 pm',
    location: 'Albuquerque, New Mexico',
    price: '$5.00 - $60.00',
    imageUrl: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/12/event30-710x480.jpg',
    liked: false,
    profileImage:"https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/about_team_2-1-150x150.jpg"
  },
  {
    id: 3,
    category: 'Conference',
    title: 'Free Event',
    date: 'Tue, September 30, 2025, 1:00 pm',
    location: 'Lakewood, Colorado',
    price: '$0.00',
    imageUrl: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/ev4-710x480.jpg',
    liked: false,
    profileImage:"https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/about_team_2-1-150x150.jpg"
  },
  {
    id: 4,
    category: 'Education',
    title: 'Affiliate – External Link',
    date: 'Thu, September 28, 2028, 7:30 am',
    location: 'Fresno, California',
    price: '$79',
    imageUrl: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/event-bg-10-710x480.jpg',
    liked: false,
    profileImage:"https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/about_team_2-1-150x150.jpg"
  },
  {
    id: 5,
    category: 'Concert',
    title: 'Seat Map',
    date: 'Fri, October 25, 2024, 1:00 pm',
    location: 'Albuquerque, New Mexico',
    price: '$5.00 - $60.00',
    imageUrl: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/ev7-710x480.jpg',
    liked: false,
    profileImage:"https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/about_team_2-1-150x150.jpg"
  },
  {
    id: 6,
    category: 'Conference',
    title: 'Free Event',
    date: 'Tue, September 30, 2025, 1:00 pm',
    location: 'Lakewood, Colorado',
    price: '$0.00',
    imageUrl: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/e31-710x480.jpg',
    liked: false,
    profileImage:"https://demo.ovathemewp.com/meup/wp-content/uploads/2019/09/about_team_2-1-150x150.jpg"
  }
];

const Upcomingevent = ({ event, toggleLike }) => {
  return (
    <div className='mainCard'>
    <div className="event-card">
      <div className="event-image">
        <img src={event.imageUrl} alt={event.title} />
        <span className="event-category">{event.category}</span>
        <img src={event.profileImage} className='profileImage' style={{height:'80px',width:'80px'}}></img>
        <div className="event-like" onClick={() => toggleLike(event.id)}>
          {event.liked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
        </div>
      </div>
      <div className="event-info">
        <h3>{event.title}</h3>
        <p><i class="fa-regular fa-clock" style={{marginRight:'5px'}}></i>{event.date}</p>
        <p><i class="fa-solid fa-location-dot" style={{marginRight:'5px'}}></i>{event.location}</p>
        <div className='section'>

        <button className="get-ticket">Get Ticket</button> <p>{event.price}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

const UpcomingEvents = () => {
  const [events, setEvents] = useState(eventsData);

  const toggleLike = (id) => {
    setEvents(events.map(event =>
      event.id === id ? { ...event, liked: !event.liked } : event
    ));
  };

  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <p>You can choose to display featured</p>
      <div className="categories">
        <button>All</button>
        <button>Business</button>
        <button>Concert</button>
        <button>Conference</button>
        <button>All</button>
        <button>Business</button>
        <button>Concert</button>
        <button>Conference</button>
        <button>All</button>
        <button>Business</button>
        <button>Concert</button>
        <button>Conference</button>
      </div>
      <div className="events-list">
        {events.map(event => (
          <Upcomingevent key={event.id} event={event} toggleLike={toggleLike} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;

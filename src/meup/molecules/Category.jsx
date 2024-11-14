import React from 'react';
import './Category.css';

const categories = [
  { name: 'Business', events: 3, icon: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/10/business.png' },
  { name: 'Concert', events: 2, icon: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/10/music.png' },
  { name: 'Conference', events: 5, icon: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/10/conference.png' },
  { name: 'Fashion', events: 3, icon: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/10/night.png' },
  { name: 'Food & Drink', events: 2, icon: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/10/food_drink.png' },
  { name: 'Festival', events: 3, icon: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/10/festival.png' },
  { name: 'Sport', events: 5, icon: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/10/icon.png' },
  { name: 'Other', events: 4, icon: 'https://demo.ovathemewp.com/meup/wp-content/uploads/2019/10/travel.png' }
];

const Category = () => {
  return (
    <div className="category-container">
      <h2>Popular Category</h2>
      <p>You can choose to display featured</p>
      <div className="grid">
        {categories.map((category, index) => (
          <div key={index} className="grid-item">
            <div className="category-icon"><img src={category.icon}/></div>
            <h5 className="category-name">{category.name}</h5>
            <p className="category-events">{category.events} Events</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

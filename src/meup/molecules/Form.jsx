import React, { useState } from 'react';
import './Form.css';

const FilterForm = () => {
  // Initialize with numeric values
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleRangeChange = (e) => {
    // Convert input value to a number before updating state
    const value = Number(e.target.value);
    setPriceRange([value, 100]);
  };

  return (
    <div className="filter-container">
      <div className="filter-grid">
        <input type="text" placeholder="Enter name ..." className="input-field" />
        <select className="input-field">
          <option>Select Category</option>
        </select>
        <select className="input-field">
          <option>All States</option>
        </select>
        <select className="input-field">
          <option>Pioche</option>
        </select>
        <select className="input-field">
          <option>All Time</option>
        </select>
        <input type="date" placeholder="Start date ..." className="input-field" />
        <input type="date" placeholder="End date ..." className="input-field" />
        <input type="text" placeholder="Venue ..." className="input-field" />
        <select className="input-field">
          <option>Select Type Event</option>
        </select>
        <div className="range-slider">
          {/* Ensure priceRange[0] is numeric */}
          <span>${priceRange[0].toFixed(2)}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[0]}
            onChange={handleRangeChange}
          />
          <span>${priceRange[1].toFixed(2)}</span>
        </div>
        <select className="input-field">
          <option>Select Job</option>
        </select>
        <select className="input-field">
          <option>Select Time</option>
        </select>
      </div>
      <button className="search-button">Search</button>
    </div>
  );
};

export default FilterForm;

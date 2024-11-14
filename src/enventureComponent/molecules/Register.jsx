import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className='registerContainer'>
      <div className='leftSection'>
        <div className='eventInfo'>
          <div className='infoItem border1'>
            <i className='fas fa-microphone'></i>
            <p>8 SPEAKERS</p>
          </div>
          <div className='infoItem border2'>
            <i className='fas fa-flag'></i>
            <p>500+ SEATS</p>
          </div>
          <div className='infoItem border1'>
            <i className='fas fa-ticket-alt'></i>
            <p>300 TICKETS</p>
          </div>
          <div className='infoItem border2'>
            <i className='fas fa-calendar-alt'></i>
            <p>3 DAYS EVENT</p>
          </div>
        </div>
      </div>

      <div className='rightSection'>
        <h2>Register to <span className='alternate'>Eventre</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <form className='registerForm'>
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Email' />
          <input type='text' placeholder='Phone' />
          <select>
            <option value='' disabled selected>Select Ticket Type</option>
            <option value='vip'>VIP</option>
            <option value='general'>General</option>
          </select>
          <button type='submit'>REGISTER NOW</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

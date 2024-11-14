import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='heroSection'>
      <div className='imageSection'>
        <img src='https://demo.themefisher.com/eventre-bootstrap/images/background/objects.png' alt='img'/>

        <div className='heroDetail'>
            <p>The countdown is finished!</p>
            <h1>BUSINESS</h1>
            <h2>CONFERENCE 2024</h2>
            <h6>02-05 July 2024 CALIFORNIA</h6>
            <button><span>GET TICKET NOW</span></button>
        </div>
      </div>
    </div>
  )
}

export default Hero

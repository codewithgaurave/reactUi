import React from 'react'
import Navbar from './molecules/Navbar'
import Hero from './molecules/Hero'
import About from './molecules/About'
import Speacking from './molecules/Speacking'
import Register from './molecules/Register'
import TicketNow from './molecules/TicketNow'
import GetTicket from './molecules/GetTicket'
import Sponsers from './molecules/Sponsers'
import News from './molecules/News'
import Subscribe from './molecules/Subscribe'
import Footer from './molecules/Footer'
import Eventschedule from './molecules/Eventshedule'
import ConstraHomepage from '../constraComponent/pages/ConstraHomepage'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Speacking/>
        <Eventschedule/>
        <Register/>
        <GetTicket/>
        <TicketNow/>
        <Sponsers/>
        <News/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Home

import React from 'react'
import Navbar from '../Molecules/Navbar'
import About from '../Molecules/About'
import Numbers from '../Molecules/Numbers'
import WhatWedo from '../Molecules/Whatdo'
import Project from '../Molecules/Project'
import Testimonials from '../Molecules/Testimonials'
import Help from '../Molecules/Help'
import Recentproject from '../Molecules/Recentproject'
import Footer from '../Molecules/Footer'

const ConstraHomepage = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Numbers/>
      <WhatWedo/>
      <Project/>
      <Testimonials/> 
      <Help/>
      <Recentproject/>
      <Footer/>
    </div>
  )
}

export default ConstraHomepage

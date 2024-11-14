import React from 'react'
import Navbar from '../molecules/Navbar'
import ImageSlider from '../molecules/Slider'
import FilterForm from '../molecules/Form'
import Category from '../molecules/Category'
import Upcomingevent from '../molecules/Upcomingevent'
import Response from '../molecules/Response'
import Numbers from '../molecules/Numbers'
import LatestNews from '../molecules/LatestNews'
import Footer from '../molecules/Footer'
import Testimonials from '../molecules/Testimonials'

const Meuphome = () => {
  return (
    <div>
      {/* <h1>Hello WOrld</h1> */}
      <Navbar/>
      <ImageSlider/>
      <FilterForm/>
      <Category/>
      <Upcomingevent/>
      <Response/>
      <Testimonials/>
      <Numbers/>
      <LatestNews/>
      <Footer/>
    </div>
  )
}

export default Meuphome

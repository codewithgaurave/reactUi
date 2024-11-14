import React from 'react'
import './Recentproject.css'

const Recentproject = () => {
  return (
    <div className='mainProject'>
        <div className='titleSection'>
            <p>WORK OF EXCELLENCE</p>
            <h1>RECENT PROJECTS</h1>
        </div>
        <div className='projectParent'>
            <div className='firstProject'>
                <img src='https://demo.themefisher.com/constra-bootstrap/images/news/news1.jpg' alt='img'/>
                <p className='title'>We Just Completes $17.6 million Medical Clinic in Mid-Missouri</p>
                <p className='date' style={{color:'gray' , fontSize:'15px'}}>July 20, 2017</p>
            </div>
            <div className='secondProject'>
            <img src='https://demo.themefisher.com/constra-bootstrap/images/news/news2.jpg' alt='img'/>
                <p className='title'>We Just Completes $17.6 million Medical Clinic in Mid-Missouri</p>
                <p className='date' style={{color:'gray' , fontSize:'15px'}}>July 20, 2017</p>

            </div>
            <div className='thirdProject'>
            <img src='https://demo.themefisher.com/constra-bootstrap/images/news/news3.jpg' alt='img'/>
                <p className='title'>We Just Completes $17.6 million Medical Clinic in Mid-Missouri</p>
                <p className='date' style={{color:'gray' , fontSize:'15px'}}>July 20, 2017</p>

            </div>

        </div>

        <div className='ButtonSection'>
            <p>SEE ALL POSTS</p>

        </div>
      
    </div>
  )
}

export default Recentproject

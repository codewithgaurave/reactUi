import React from 'react'
import './Help.css'

const Help = () => {
  return (
    <div className='helpMain'>
        <div className='contactNumber'>
            <p>CAN WE HELP?</p>
            <h3>9696559848</h3>
        </div>
        <div className='textInput'>
            <div className='text'>
              <p>NEWSLETTER SIGN UP</p>
              <span>Latest updates and News.</span>
            </div>
            <div className='inputArea'>
              <input placeholder='Write Your Email and hit Enter'/>
            </div>

        </div>
      
    </div>
  )
}

export default Help

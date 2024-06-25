import React from 'react'
import './Photo.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Photo = () => {
  return (
    <div className='photo container'>
        <div className='photo-text'>
            <h1>We ensure the Better Eduaction </h1>
            <h1>For the Better World!</h1>
            <p>
                Our cutting-edge curriculum is designed to empower students 
                with the knoweledge ,skills, and experiences needed to excel in 
                the dynamic field of Eduaction.
            </p>
            <button className='btn'>
                Explore More <img src={dark_arrow} alt=''/>
            </button>

        </div>
      
    </div>
  )
}

export default Photo

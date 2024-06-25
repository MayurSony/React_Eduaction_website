import React from 'react'
import './Videoplayer.css'
import video from '../../assets/giphy.gif'

const Videoplayer = () => {
  return (
    <div className='videoplayer'>
        <video src={video}></video>
      
    </div>
  )
}

export default Videoplayer

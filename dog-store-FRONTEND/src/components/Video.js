import React from 'react'
import './Video.css'


export default function Video() {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
        <source src={"./assets/home1.mp4"} type='video/mp4' />
    </video>
  </div>
  )
}

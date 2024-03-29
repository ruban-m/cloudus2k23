import React from 'react'
import './style.css'

const Logo = () => {
  return (
    <div className='logo-box'>
      <h1>SSM IET</h1>
      <div>
        <h1 className='h1'>CLOUDUS</h1>
        <h1 className='h1'>2K23</h1>
      </div>
      <p className='mx-lg-4'>
        The department of Computer Science and Engineering & CSI Chapter proudly
        presents a National Level Technical Symposium "CLOUDUS'2k23" on 13
        <sup>th</sup> APRIL, 2023.
      </p>
      <h6>No On Spot registration</h6>
      <h5>Registration Fee ₹200 Only !!!</h5>
      <a
        href='#'
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn-dark btn-width'
        type='button'
        style={{ pointerEvents: 'none' }}
      >
        sorry we are closed
      </a>
      <h4>Event Schedule</h4>
    </div>
  )
}

export default Logo

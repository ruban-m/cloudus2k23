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
      <h6>Registration closes by 11.04.2023. No On Spot registration</h6>
      <a
        href='https://forms.gle/ZBATuGzXBk86V9HS9'
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn-dark btn-width'
        type='button'
      >
        Register Now
      </a>
      <h4>On That Day</h4>
    </div>
  )
}

export default Logo

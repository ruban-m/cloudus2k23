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
      <a
        href='https://forms.gle/ZBATuGzXBk86V9HS9'
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn-dark btn-width'
        type='button'
      >
        Online Registration
      </a>
    </div>
  )
}

export default Logo

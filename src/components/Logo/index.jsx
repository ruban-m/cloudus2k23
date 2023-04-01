import React from 'react'
import './style.css'

const Logo = () => {
  return (
    <div className='logo-box'>
      <h3>SSM IET Presents</h3>
      <div>
        <h1>CLOUDUS</h1>
        <h1>2K23</h1>
      </div>
      <p className='mx-lg-4'>
        The department of Computer Science and Engineering & in SSM Institute of
        Engineering and Technology, Dindigul is proposed to conduct a National
        Level Technical Symposium "CLOUDUS'2k23" on 13th APRIL, 2023.
      </p>
      <a
        href='https://forms.gle/ZBATuGzXBk86V9HS9'
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn-dark btn-width'
        type='button'
      >
        Register
      </a>
    </div>
  )
}

export default Logo

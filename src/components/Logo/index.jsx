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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui,
        ipsa excepturi saepe mollitia assumenda accusantium consequuntur soluta
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

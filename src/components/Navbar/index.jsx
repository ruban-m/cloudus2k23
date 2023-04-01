import React, { useState, useEffect } from 'react'

const Navbar = () => {
  return (
    <div
      className='navbar navbar-lite bg-white fixed-top'
      style={{ height: '3rem' }}
    >
      <div>
        <a href='https://www.ssmiet.ac.in/' className='navbar-brand px-3'>
          ssmiet.ac.in
        </a>
      </div>
    </div>
  )
}

export default Navbar

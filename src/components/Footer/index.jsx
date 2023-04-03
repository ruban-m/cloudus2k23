import React from 'react'
import Contact from '../Contact'
import './style.css'
import bgImage from '/assets/images/background.png'

const Footer = () => {
  return (
    <div className='footer' style={{ minHeight: '300px' }}>
      <Contact />
      <img src={bgImage} alt='' className='nightimage' />
    </div>
  )
}

export default Footer

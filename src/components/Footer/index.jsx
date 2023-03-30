import React from 'react'
import Contact from '../Contact'
import './style.css'
import bgImage from '/assets/images/background.png'

const Footer = () => {
  return (
    <div className='footer'>
      <Contact />
      <img src={bgImage} alt='' />
    </div>
  )
}

export default Footer

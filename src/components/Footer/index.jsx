import React, { useState } from 'react'
import Contact from '../Contact'
import './style.css'
import bgImage from '/assets/images/background.png'

const Footer = () => {
  // const [footerHeight, setfooterHeight] = useState(0)
  // const sendHeight = (message) => {
  //   setfooterHeight(message)
  // }

  return (
    <div className='footer' style={{ minHeight: '300px' }}>
      {/* style={{ minHeight: `${footerHeight + 10}px` }} */}
      {/* <Contact callBack={sendHeight} /> */}
      <img src={bgImage} alt='' className='nightimage' />
    </div>
  )
}

export default Footer

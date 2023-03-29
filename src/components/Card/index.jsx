import React from 'react'
import './style.css'

const Card = ({ img, title, subtitle, description }) => {
  return (
    <div className='card h-100'>
      <img src={img} className='card-img-top img-box' alt='' />
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <h5 className='card-subtitle'>{subtitle}</h5>
        <p className='card-text'>{description}</p>
      </div>
    </div>
  )
}

export default Card

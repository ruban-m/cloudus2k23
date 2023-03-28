import React from 'react'
const Card = ({ img, title, subtitle, description }) => {
  return (
    <div className='card'>
      <img src={img} className='card-img-top' alt='' />
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <h5 className='card-subtitle'>{subtitle}</h5>
        <div className='card-text'>{description}</div>
      </div>
    </div>
  )
}

export default Card

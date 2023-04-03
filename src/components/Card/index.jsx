import React, { useState, useEffect } from 'react'
import './style.css'
import Modal from '../Modal'

const Card = ({ img, title, subtitle, description, link, id, rules }) => {
  return (
    <div className='card h-100'>
      <img src={img} className='card-img-top img-box' alt='' />
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <h5 className='card-subtitle'>{subtitle}</h5>
        <div className='card-text'>
          <p>{description}</p>
          <button
            className='btn btn-dark w-100'
            data-bs-toggle='modal'
            data-bs-target={`#${id}`}
          >
            View Rules
          </button>
          <Modal id={id} rules={rules} link={link} title={title} />
        </div>
      </div>
    </div>
  )
}

export default Card

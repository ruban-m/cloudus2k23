import React, { useEffect, useState } from 'react'
import './style.css'

const Card = ({ img, title, subtitle, description, link }) => {
  const [isLink, setIsLink] = useState(false)
  useEffect(() => {
    setIsLink(link !== undefined)
  }, [])

  return (
    <div className='card h-100'>
      <img src={img} className='card-img-top img-box' alt='' />
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <h5 className='card-subtitle'>{subtitle}</h5>
        <p className='card-text'>
          {description}
          {isLink ? (
            <div>
              <br />
              <a href={link} download className='btn btn-dark w-100'>
                Download PPT Template
              </a>
            </div>
          ) : (
            ''
          )}
        </p>
      </div>
    </div>
  )
}

export default Card

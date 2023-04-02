import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import './style.css'

const Cordinators = ({ title, name1, number1, name2, number2 }) => {
  return (
    <div>
      <h5>{title}</h5>
      <div style={{ marginTop: '1rem' }}>
        <h6>{name1}</h6>
        <a
          href={`tel:${number1}`}
          className='btn btn-dark'
          style={{ width: 'fit-content' }}
        >
          <Icon.Whatsapp /> {number1}
        </a>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <h6>{name2}</h6>
        <a
          href={`tel:${number2}`}
          className='btn btn-dark'
          style={{ width: 'fit-content' }}
        >
          <Icon.Whatsapp /> {number2}
        </a>
      </div>
    </div>
  )
}

export default Cordinators

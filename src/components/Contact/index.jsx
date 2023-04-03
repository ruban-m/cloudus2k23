import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import './style.css'
import ssm from '/assets/images/ssm.png'

const Contact = () => {
  return (
    <div className='contact-flex-box'>
      <div className='sub-flex'>
        <img
          src={ssm}
          alt=''
          style={{
            width: '60px',
            aspectRatio: '1/1',
            borderRadius: '2px',
          }}
        />
        <h3 className='m-0 f-h3'>
          SSM INSTITUTE OF ENGINEERING AND TECHNOLOGY
        </h3>
      </div>
      <div className='below-box'>
        <a
          href='https://maps.app.goo.gl/KZjf3HSq4UnD2QGE9'
          type='button'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-dark'
          style={{ width: '240px' }}
        >
          <Icon.GeoAlt /> Google Map
        </a>
        <a
          href='https://instagram.com/cloudus2k23'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-dark'
          style={{ width: '240px' }}
        >
          <Icon.Instagram /> cloudus2k23
        </a>
        <a
          href='mailto:cloudus2k23@gmail.com'
          type='button'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-dark'
          style={{ width: '240px' }}
        >
          <Icon.Envelope /> cloudus2k23@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Contact

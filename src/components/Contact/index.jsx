import React, { useState, useEffect, useRef } from 'react'
import * as Icon from 'react-bootstrap-icons'
import './style.css'
import ssm from '/assets/images/ssm.png'
import Cordinators from '../Cordinators'

const Contact = ({ callBack }) => {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
    window.addEventListener('resize', () => {
      setHeight(ref.current.clientHeight)
    })
    callBack(height)
  }, [height])

  return (
    <div ref={ref} className='contact'>
      <div className='contact-flex-box'>
        <div className='sub-flex'>
          <img
            src={ssm}
            alt=''
            style={{
              width: '60px',
              aspectRatio: '1/1',
              marginRight: '1rem',
              borderRadius: '2px',
            }}
          />
          <h3 className='m-0'>
            SSM INSTITUTE OF ENGINEERING <br />
            AND TECHNOLOGY
          </h3>
        </div>

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
      <div className='cordinators'>
        <Cordinators
          title='Faculty Coordinators'
          name1='Mrs K.Sureka AP/CSE'
          number1='9943471366'
          name2='Ms N.Anu Lavanya AP/CSE'
          number2='9750466935'
        />
      </div>
      <div className='cordinators'>
        <Cordinators
          title='Student Coordinators'
          name1='S.Prasanth'
          number1='6380401547'
          name2='S.Prithishika'
          number2='6374723729'
        />
      </div>
    </div>
  )
}

export default Contact

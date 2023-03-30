import React from 'react'
import './style.css'
const Timing = ({ startTime, endTime }) => {
  return (
    <div className='timing'>
      <p>|</p>
      <h5>Between</h5>
      <p>|</p>
      <h4>{startTime}</h4>
      <p>|</p>
      <h5>TO</h5>
      <p>|</p>
      <h4>{endTime}</h4>
      <p>|</p>
    </div>
  )
}

export default Timing

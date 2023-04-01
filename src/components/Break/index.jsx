import Lottie from 'lottie-react'
import React from 'react'
import './style.css'
const Break = ({ startTime, endTime, breakName1, breakName2, lottieData }) => {
  return (
    <div className='row m-0 text-center d-flex align-items-center'>
      <div className='col d-flex justify-content-end'>
        <div>
          <div>{startTime}</div>
          <div>To</div>
          <div>{endTime}</div>
        </div>
      </div>
      <div className='col-5 col-md-2 break'>
        <Lottie animationData={lottieData} style={{ width: '200px' }} />
      </div>
      <div className='col d-flex justify-content-start'>
        <div>
          <div>{breakName1}</div>
          <div>{breakName2}</div>
        </div>
      </div>
    </div>
  )
}

export default Break

import Lottie from 'lottie-react'
import React from 'react'
import './style.css'
const Break = ({ start, end, lottieData }) => {
  return (
    <div className='row m-0 text-center d-flex align-items-center'>
      <div className='col d-flex justify-content-end'>{start}</div>
      <div className='col-5 col-md-2 break'>
        <Lottie animationData={lottieData} style={{ width: '200px' }} />
      </div>
      <div className='col d-flex justify-content-start'>{end}</div>
    </div>
  )
}

export default Break

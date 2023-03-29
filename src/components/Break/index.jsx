import Lottie from 'lottie-react'
import React from 'react'
import './style.css'
const Break = ({ start, end, lottieData }) => {
  return (
    <div className='row m-0 text-center d-flex align-items-center'>
      <p className='col d-flex justify-content-end'>{start}</p>
      <div className='col-5 col-md-2 break'>
        <Lottie animationData={lottieData} style={{ width: '200px' }} />
      </div>
      <p className='col d-flex justify-content-start'>{end}</p>
    </div>
  )
}

export default Break

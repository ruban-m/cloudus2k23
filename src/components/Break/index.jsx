import Lottie from 'lottie-react'
import React from 'react'
import './style.css'
const Break = ({ lottieData }) => {
  return (
    <div className='row row-cols-3 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 px-4 m-0 text-center d-flex align-items-center'>
      <div className='col'>Price</div>
      <div className='col break'>
        <Lottie animationData={lottieData} style={{ width: '200px' }} />
      </div>
      <div className='col'>Destribution</div>
    </div>
  )
}

export default Break

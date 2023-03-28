import React from 'react'
import Card from '../Card'
import img1 from '../../assets/images/14979256_SL_060521_43530_27.jpg'
import Timing from '../Timing'
import Break from '../Break'
import lunchLottie from '../../assets/Lottie/prepare-food.json'
import priceLottie from '../../assets/Lottie/trophy.json'
import coffeeLottie from '../../assets/Lottie/coffee-love.json'

const Flexbox = () => {
  return (
    <React.Fragment>
      <Break lottieData={coffeeLottie} />
      <div className='row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 p-4 p-lg-5 m-0'>
        <div className='col'>
          <Card
            img={img1}
            title='ceveve'
            subtitle={'bchwbcwu'}
            description={'vefvevrf'}
          />
        </div>
        <div className='col'>
          <Timing startTime='10:00 AM' endTime='11:00 AM' />
        </div>
        <div className='col'>
          <Card
            img={img1}
            title='ceveve'
            subtitle={'bchwbcwu'}
            description={'vefvevrf'}
          />
        </div>
      </div>
      <div className='row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 p-4 p-lg-5 m-0'>
        <div className='col'>
          <Card
            img={img1}
            title='ceveve'
            subtitle={'bchwbcwu'}
            description={'vefvevrf'}
          />
        </div>
        <div className='col'>
          <Timing startTime='11:00 AM' endTime='12:00 PM' />
        </div>
        <div className='col'>
          <Card
            img={img1}
            title='ceveve'
            subtitle={'bchwbcwu'}
            description={'vefvevrf'}
          />
        </div>
      </div>
      <div className='row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 p-4 p-lg-5 m-0'>
        <div className='col'>
          <Card
            img={img1}
            title='ceveve'
            subtitle={'bchwbcwu'}
            description={'vefvevrf'}
          />
        </div>
        <div className='col'>
          <Timing startTime='12:00 PM' endTime='01:00 PM' />
        </div>
        <div className='col'>
          <Card
            img={img1}
            title='ceveve'
            subtitle={'bchwbcwu'}
            description={'vefvevrf'}
          />
        </div>
      </div>
      <Break lottieData={lunchLottie} />
      <div className='row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 p-4 p-lg-5 m-0'>
        <div className='col'>
          <Card
            img={img1}
            title='ceveve'
            subtitle={'bchwbcwu'}
            description={'vefvevrf'}
          />
        </div>
        <div className='col'>
          <Timing startTime='02:00 PM' endTime='03:00 PM' />
        </div>
        <div className='col'>
          <Card
            img={img1}
            title='ceveve'
            subtitle={'bchwbcwu'}
            description={'vefvevrf'}
          />
        </div>
      </div>
      <Break lottieData={priceLottie} />
    </React.Fragment>
  )
}
export default Flexbox

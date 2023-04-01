import React from 'react'
import Footer from './components/Footer'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Events from './components/Events'
import Break from './components/Break'

import lunchLottie from './assets/Lottie/prepare-food.json'
import priceLottie from './assets/Lottie/trophy.json'
import coffeeLottie from './assets/Lottie/coffee-love.json'
import awardLottie from './assets/Lottie/award.json'
import foodLottie from './assets/Lottie/food-carousel.json'
import hotLottie from './assets/Lottie/hot-coffee.json'
import registrLottie from './assets/Lottie/registration.json'

import Data from '../data.json'
import Inagural from './components/Inagural'

const App = () => {
  return (
    <div>
      <Navbar />
      <Logo />
      <Break
        startTime='09:00 AM'
        endTime='09:30 AM'
        breakName1='Registration'
        breakName2='Verification'
        lottieData={registrLottie}
      />
      <Inagural />
      <Break
        startTime='10:15 AM'
        endTime='10:30 AM'
        breakName1='Coffee'
        breakName2='Break'
        lottieData={coffeeLottie}
      />
      {Data.slice(0, 3).map((data) => (
        <Events object={data} />
      ))}
      <Break
        startTime='01:00 PM'
        endTime='01:45 PM'
        breakName1='Lunch'
        breakName2='Break'
        lottieData={foodLottie}
      />
      {Data.slice(3, 4).map((data) => (
        <Events object={data} />
      ))}
      <Break
        startTime='02:45 PM'
        endTime='03:00 PM'
        breakName1='Coffee'
        breakName2='Break'
        lottieData={hotLottie}
      />
      <Break
        startTime='03:00 PM'
        endTime='03:30 PM'
        breakName1='Prize'
        breakName2='Distribution'
        lottieData={priceLottie}
      />
      <Footer />
    </div>
  )
}

export default App

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

import Data from '../data.json'
import Inagural from './components/Inagural'

const App = () => {
  return (
    <div>
      <Navbar />
      <Logo />
      <Inagural />
      <Break start='Coffee' end='Break' lottieData={coffeeLottie} />
      {Data.slice(0, 3).map((data) => (
        <Events object={data} />
      ))}
      <Break start='Lunch' end='Break' lottieData={foodLottie} />
      {Data.slice(3, 4).map((data) => (
        <Events object={data} />
      ))}
      <Break start='Prize' end='Distribution' lottieData={priceLottie} />
      <Footer />
    </div>
  )
}

export default App

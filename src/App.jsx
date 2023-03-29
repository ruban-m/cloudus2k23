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

import Data from '../data.json'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Logo />
      <Break start='Coffee' end='Break' lottieData={coffeeLottie} />
      {Data.slice(0, 3).map((data) => (
        <Events object={data} />
      ))}
      <Break start='Lunch' end='Break' lottieData={lunchLottie} />
      {Data.slice(3, 4).map((data) => (
        <Events object={data} />
      ))}
      <Break start='Prize' end='Distribution' lottieData={awardLottie} />
      <Footer />
    </React.Fragment>
  )
}

export default App

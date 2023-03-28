import React from 'react'
import Flexbox from './components/Flexbox'
import Footer from './components/Footer'
import Logo from './components/Logo'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Logo />
      <Flexbox />
      <Footer />
    </React.Fragment>
  )
}

export default App

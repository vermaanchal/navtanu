import React from 'react'
import Service from './Service'
import Info from './Info'
import Footer from './Footer'
import Navbar from './Navbar'
import Banner from './Banner'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner />
      <Service />
      <Info />
      <Footer />
    </div>
  )
}

export default Home

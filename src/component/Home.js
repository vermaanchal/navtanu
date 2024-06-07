import React from 'react'
import Service from './Service'
import Banner from './Banner'
import Testimonials from './Testimonials'
import Customer from './Customer'

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <Testimonials />
      <Customer/>
    </div>
  )
}

export default Home

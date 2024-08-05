import React from 'react'
import Banner from './Banner'
import Testimonials from './Testimonials'
import Customer from './Customer'
import CHooseUs from './whyus/CHooseUs'
import CircularSlider from './circularSlider'
import KycSection from './kycSection'
import Teamdetail from './teams/teamdetail'
// import Teamdetail from './teamdetail'

const Home = () => {
  return (
    <div>
      <Banner />
      <div className='my-4'>
        <CHooseUs />
      </div>
      <div className='bg-light'>
        <div className='container py-5'>
          <div className='text-center mx-auto'>
            <h1 class="display-6">What We Offer?</h1>
            <CircularSlider />
          </div>
        </div>
      </div>
      <div className='my-4'>
        <KycSection />
      </div>
      <Testimonials />
      <Teamdetail/>
      <Customer />
    </div>
  )
}

export default Home 

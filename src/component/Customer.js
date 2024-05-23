import React from 'react'

const Customer = () => {
  return (
    <div class="container-fluid testimonial py-5">
    <div class="container py-5">
      <div class="row g-4 align-items-center">
        <div class="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <div class="h-100 rounded">
            <h4 class="text-primary">Let's Get Started</h4>
            <p class="mb-4">The future of investment management at your fingertips.</p>
          </div>
          <div>
            <img src='img/AppStore_final.png' width={220}/>
          </div>
          <div className='my-4'>
            <img src='img/PlayStore_final.png' width={220}/>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          {/* <img src='img/homescren.png' width={300} height={400}/> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Customer

import React from 'react'

const Info = () => {
  return (
    <div class="container-xxl bg-light py-5 my-5">
      <div class="container py-5">
        <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "655px" }}>
          <h1 class="display-6">One App. Manage all Investments.
            Feel Empowered</h1>
        </div>
        <div class="row g-3">
          <div class="col-6 wow fadeIn" data-wow-delay="0.1s">
            <div class="bg-white text-center p-3">
              <h1 class="mb-0">0</h1>
              <span class="text-primary fs-5">Days</span>
            </div>
          </div>
          {/* <div class="col-6 wow fadeIn" data-wow-delay="0.3s">
            <div class="bg-white text-center p-3">
              <h1 class="mb-0">0</h1>
              <span class="text-primary fs-5">Hours</span>
            </div>
          </div> */}
          {/* <div class="col-6 wow fadeIn" data-wow-delay="0.5s">
            <div class="bg-white text-center p-3">
              <h1 class="mb-0">0</h1>
              <span class="text-primary fs-5">Minutes</span>
            </div>
          </div> */}
          <div class="col-6 wow fadeIn" data-wow-delay="0.7s">
            <div class="bg-white text-center p-3">
              <h1 class="mb-0">0</h1>
              <span class="text-primary fs-5">Seconds</span>
            </div>
          </div>
          {/* <div class="col-12 text-center">
            <img class="img-fluid m-1" src="img/payment-1.png" alt="" style={{ maxWidth: "50px" }} />
            <img class="img-fluid m-1" src="img/payment-2.png" alt="" style={{ maxWidth: "50px" }} />
            <img class="img-fluid m-1" src="img/payment-3.png" alt="" style={{ maxWidth: "50px" }} />
            <img class="img-fluid m-1" src="img/payment-4.png" alt="" style={{ maxWidth: "50px" }} />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Info

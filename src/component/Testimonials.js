import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <div class="container-fluid testimonial bg-light py-5">
      <div class="container py-5">
        <div class="row g-4 align-items-center">
          <div class="col-xl-4 wow fadeInLeft" data-wow-delay="0.1s">
            <div class="h-100 rounded">
              <h4 class="text-primary">Our Feedbacks</h4>
              <h1 class="display-4 mb-4">Clients are Talking</h1>
              <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque soluta unde itaque. Consequatur quam odit blanditiis harum veritatis porro.</p>
              <a class="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Read All Reviews <i class="fas fa-arrow-right ms-2"></i></a>
            </div>
          </div>
          <div class="col-xl-8 col-sm-12 col-xs-12 wow fadeInLeft" data-wow-delay="0.1s">
            <Slider {...settings}>
              <div className='slidee'>
              <div class="bg-white rounded p-4">
                <div className='d-flex'>
                  <div><i class="fas fa-quote-left fa-3x text-dark me-3"></i></div>
                  <p class="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure,
                  </p>
                </div>
                <div class="d-flex justify-content-end">
                  <div class="my-auto text-end">
                    <h5>Person Name</h5>
                    <p class="mb-0">Profession</p>
                  </div>
                  <div class="bg-white rounded-circle ms-3">
                    <img src="img/testimonial-1.jpg" class="rounded-circle p-2" style={{ width: "80px", height: "80px", border: " 1px solid", borderColor: " var(--bs-primary)" }} alt="" />
                  </div>
                </div>
              </div>
              </div>
              <div class="bg-white rounded p-4">
                <div className='d-flex' >
                  <div><i class="fas fa-quote-left fa-3x text-dark me-3"></i></div>
                  <p class="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure,
                  </p>
                </div>
                <div class="d-flex justify-content-end">
                  <div class="my-auto text-end">
                    <h5>Person Name</h5>
                    <p class="mb-0">Profession</p>
                  </div>
                  <div class="bg-white rounded-circle ms-3">
                    <img src="img/testimonial-2.jpg" class="rounded-circle p-2" style={{ width: "80px", height: "80px", border: " 1px solid", borderColor: " var(--bs-primary)" }} alt="" />
                  </div>
                </div>
              </div>
              <div class="bg-white rounded p-4">
                <div className='d-flex' >
                  <div><i class="fas fa-quote-left fa-3x text-dark me-3"></i></div>
                  <p class="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure,
                  </p>
                </div>
                <div class="d-flex justify-content-end">
                  <div class="my-auto text-end">
                    <h5>Person Name</h5>
                    <p class="mb-0">Profession</p>
                  </div>
                  <div class="bg-white rounded-circle ms-3">
                    <img src="img/testimonial-3.jpg" class="rounded-circle p-2" style={{ width: "80px", height: "80px", border: " 1px solid", borderColor: " var(--bs-primary)" }} alt="" />
                  </div>
                </div>
              </div>
              <div class="bg-white rounded p-4">
                <div className='d-flex' >
                  <div><i class="fas fa-quote-left fa-3x text-dark me-3"></i></div>
                  <p class="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure,
                  </p>
                </div>
                <div class="d-flex justify-content-end">
                  <div class="my-auto text-end">
                    <h5>Person Name</h5>
                    <p class="mb-0">Profession</p>
                  </div>
                  <div class="bg-white rounded-circle ms-3">
                    <img src="img/testimonial-1.jpg" class="rounded-circle p-2" style={{ width: "80px", height: "80px", border: " 1px solid", borderColor: " var(--bs-primary)" }} alt="" />
                  </div>
                </div>
              </div>
            </Slider>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

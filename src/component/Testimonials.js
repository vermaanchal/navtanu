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
    <div className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0.1s">
            <div className="h-100 rounded">
              <h4 className="text-primary">Our Feedbacks</h4>
              <h1 className="display-4 mb-4">Clients are Talking</h1>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque soluta unde itaque. Consequatur quam odit blanditiis harum veritatis porro.</p>
              <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Read All Reviews <i className="fas fa-arrow-right ms-2"></i></a>
            </div>
          </div>
          <div className="col-xl-8 col-sm-12 col-xs-12 wow fadeInLeft" data-wow-delay="0.1s">
            <Slider {...settings}>
              <div className='slidee'>
                <div className="bg-white rounded p-4">
                  <div className='d-flex'>
                    <div><i className="fas fa-quote-left fa-3x text-dark me-3"></i></div>
                    <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure,
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="my-auto text-end">
                      <h5>Person Name</h5>
                      <p className="mb-0">Profession</p>
                    </div>
                    <div className="bg-white rounded-circle ms-3">
                      <img src="img/testimonial-1.jpg" className="rounded-circle p-2" style={{ width: "80px", height: "80px", border: " 1px solid", borderColor: " var(--bs-primary)" }} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded p-4">
                <div className='d-flex' >
                  <div><i className="fas fa-quote-left fa-3x text-dark me-3"></i></div>
                  <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure,
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <div className="my-auto text-end">
                    <h5>Person Name</h5>
                    <p className="mb-0">Profession</p>
                  </div>
                  <div className="bg-white rounded-circle ms-3">
                    <img src="img/testimonial-2.jpg" className="rounded-circle p-2" style={{ width: "80px", height: "80px", border: " 1px solid", borderColor: " var(--bs-primary)" }} alt="" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded p-4">
                <div className='d-flex' >
                  <div><i className="fas fa-quote-left fa-3x text-dark me-3"></i></div>
                  <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure,
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <div className="my-auto text-end">
                    <h5>Person Name</h5>
                    <p className="mb-0">Profession</p>
                  </div>
                  <div className="bg-white rounded-circle ms-3">
                    <img src="img/testimonial-3.jpg" className="rounded-circle p-2" style={{ width: "80px", height: "80px", border: " 1px solid", borderColor: " var(--bs-primary)" }} alt="" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded p-4">
                <div className='d-flex' >
                  <div><i className="fas fa-quote-left fa-3x text-dark me-3"></i></div>
                  <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure,
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <div className="my-auto text-end">
                    <h5>Person Name</h5>
                    <p className="mb-0">Profession</p>
                  </div>
                  <div className="bg-white rounded-circle ms-3">
                    <img src="img/testimonial-1.jpg" className="rounded-circle p-2" style={{ width: "80px", height: "80px", border: " 1px solid", borderColor: " var(--bs-primary)" }} alt="" />
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

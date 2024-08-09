import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <div className="container-xxl py-5 mt-5 ">
        <div className="container py-5">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <h1 className="display-6">Contact Us</h1>
              <p className="text-primary fs-5 mb-0">If You Have Any Query, Please Contact Us</p>
            </div>
            {/* <div className="col-lg-6 text-lg-end">
              <a className="btn btn-primary py-3 px-4" href="">Say Hello</a>
            </div> */}
          </div>
          <div className="row g-5">
            <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="mb-2"><b>Our office:</b></p>
              <p>Navtanu Investment Private Limited H1/A20, Sector 63, Noida, UP-201301</p>
              <hr className="w-100" />
              <p className="mb-2"><b>Call us:</b></p>
              <p>+919810793683</p>
              <hr className="w-100" />
              <p className="mb-2"><b>Mail us:</b></p>
              <p>Founder@navtanu.com</p>
              <p>www.navtanu.com</p>

              <hr className="w-100" />
              <p className="mb-2"><b>Follow us:</b></p>
              <div className="d-flex pt-2">
                <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-youtube"></i></a>
                <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              {/* <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form" className='downloadbtn'>Download Now</a>.</p> */}
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label for="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label for="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-4" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

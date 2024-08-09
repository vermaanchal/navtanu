import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Testimonials = () => {
  // Responsive settings for Slick Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default to 2 slides
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // For tablets and small desktops
        settings: {
          slidesToShow: 1, // Show only 1 slide at a time
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // Show only 1 slide at a time
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1, // Show only 1 slide at a time
        },
      },
    ],
  };

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-xs-12 wow fadeInLeft mobile" data-wow-delay="0.1s">
            <div className="h-100 rounded">
              <h4 className="text-primary">Our Feedbacks</h4>
              <h1 className="display-6 mb-4">Clients are Talking</h1> {/* Reduced font size */}
              {/* <p className="mb-4 " style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque soluta unde itaque. Consequatur quam odit blanditiis harum veritatis porro.</p> */}
              <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Read All Reviews <i className="fas fa-arrow-right ms-2"></i></a>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 col-md-12 wow fadeInLeft" data-wow-delay="0.1s">
            <Slider {...settings}>
              {[
                {
                  img: "img/testimonial-1.jpg",
                  text: "I would like to take this opportunity to thank Abida who has been handling my case. She has been a real gem and has been very proactive, professional and helpful during this process. ",
                  name: "Loren",
                  profession: "Software Developer"
                },
                {
                  img: "img/testimonial-2.jpg",
                  text: "Thank you for your continued support. I confirm that I have received the funds into my Axis account. I wanted to appreciate and acknowledge the immense empathy .",
                  name: "Bela",
                  profession: "Doctor"
                },
                {
                  img: "img/testimonial-3.jpg",
                  text: "Thanks a lot for your help and support. I could place the redemption request without any problem. We really appreciate the speed in which your team has solved this issue",
                  name: "John",
                  profession: "Lawyer"
                },
                {
                  img: "img/testimonial-1.jpg",
                  text: "I am writing to express my sincere gratitude for the invaluable support and guidance you have provided as my finance advisor. Thankyou for Your Support.",
                  name: "Loren",
                  profession: "Software Developer"
                }
              ].map((testimonial, index) => (
                <div key={index} className="slidee">
                  <div className="bg-white rounded p-4">
                    <div className="d-flex">
                      <div><i className="fas fa-quote-left fa-3x text-dark me-3"></i></div>
                      <p className="mt-4 " style={{textAlign:"justify"}}>{testimonial.text}</p>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="my-auto text-end">
                        <h5>{testimonial.name}</h5>
                        <p className="mb-0">{testimonial.profession}</p>
                      </div>
                      <div className="bg-white rounded-circle ms-3">
                        <img src={testimonial.img} className="rounded-circle p-2" style={{ width: "80px", height: "80px", border: "1px solid var(--bs-primary)" }} alt={testimonial.name} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

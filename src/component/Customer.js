import React, { useEffect, useRef, useState } from 'react';
import slide1 from '../slide1.png';
import slide2 from '../slide2.png';
import slide3 from '../slide3.png';
import slide4 from '../slide4.png';
import slide5 from '../slide5.png';
import slide1Back from '../back.png';
import sideLeft from '../side2.png';
import video from '../video.mp4'

const Customer = () => {
  const videoRef = useRef(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasUserInteracted) {
        setHasUserInteracted(true);
        // Attempt to play the video after user interaction
        if (videoRef.current) {
          videoRef.current.play().catch(error => {
            console.error('Error attempting to play video:', error);
          });
        }
        // Remove the event listeners after the first interaction
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [hasUserInteracted]);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && hasUserInteracted) {
      videoRef.current.play().catch(error => {
        console.error('Error attempting to play video:', error);
      });
    }
  };
  return (
    <>
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="row g-4 align-items-center">
            <div className="col-xl-4 col-lg-4 col-sm-12 col-xs-12 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="h-100 rounded">
                <h1 className="display-4 mb-4">Let's Get Started</h1>
                <p className="mb-4 text-primary">The future of investment management at your fingertips.</p>
              </div>
              <div>
                <img src='img/AppStore_final.png' width={220} />
              </div>
              <div className='my-4'>
                <img src='img/PlayStore_final.png' width={220} />
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 col-sm-12 col-xs-12 wow fadeInLeft why_section" data-wow-delay="0.1s">
              <div className=""
              >
                {/* <span style={{ '--i': 1 }}>
                  <div className="front"><img src={slide1} alt="slide_image" /></div>
                  <div className="back"><img src={slide1Back} alt="back_image" /></div>
                </span>
                <span style={{ '--i': 2 }}>
                  <div className="front"><img src={slide2} alt="slide_image" /></div>
                  <div className="back"><img src={slide1Back} alt="back_image" /></div>
                </span>
                <span style={{ '--i': 3 }}>
                  <div className="front"><img src={slide3} alt="slide_image" /></div>
                  <div className="back"><img src={slide1Back} alt="back_image" /></div>
                </span>
                <span style={{ '--i': 4 }}>
                  <div className="front"><img src={slide4} alt="slide_image" /></div>
                  <div className="back"><img src={slide1Back} alt="back_image" /></div>
                </span>
                <span style={{ '--i': 5 }}>
                  <div className="front"><img src={slide5} alt="slide_image" /></div>
                  <div className="back"><img src={slide1Back} alt="back_image" /></div>
                </span> */}
                <video
                  ref={videoRef}
                  src={video}
                  width={1300}
                  height={800}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Customer

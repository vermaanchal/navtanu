import React from 'react';
import ListItem from './list';

const Service = () => {
    const leftItems = ['Left 1', 'Left 2', 'Left 3', 'Left 4', 'Left 5'];
  const rightItems = ['Right 1', 'Right 2', 'Right 3', 'Right 4', 'Right 5'];
    return (
        <>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
                        <h1 class="display-6">Why Us!</h1>
                        <p class="text-primary fs-5 mb-5">The Best In The Financial Industry</p>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="d-flex align-items-start">
                                <img class="img-fluid flex-shrink-0 color-change" src="img/img1.png" alt="" />
                                <div class="ps-4">
                                    <h5 class="mb-3">Easy To Start</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="d-flex align-items-start">
                                <img class="img-fluid flex-shrink-0 color-change" src="img/img2.png" alt="" />
                                <div class="ps-4">
                                    <h5 class="mb-3">Safe & Secure</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="d-flex align-items-start">
                                <img class="img-fluid flex-shrink-0 color-change" src="img/img3.png" alt="" />
                                <div class="ps-4">
                                    <h5 class="mb-3">Affordable Plans</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="d-flex align-items-start">
                                <img class="img-fluid flex-shrink-0 color-change" src="img/img4.png" alt="" />
                                <div class="ps-4">
                                    <h5 class="mb-3">Secure Storage</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="d-flex align-items-start">
                                <img class="img-fluid flex-shrink-0 color-change" src="img/img5.png" alt="" />
                                <div class="ps-4">
                                    <h5 class="mb-3">Protected By Insurance</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="d-flex align-items-start">
                                <img class="img-fluid flex-shrink-0 color-change" src="img/img6.png" alt="" />
                                <div class="ps-4">
                                    <h5 class="mb-3">24/7 Support</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-xxl bg-light py-5 my-5">
                <div class="container py-5">
                    <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "645px" }}>
                        <h1 class="display-6">One App. Manage all Investments. Feel Empowered</h1>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item bg-white p-5">
                                <img class="img-fluid mb-4 color-change" src="img/img9.png" alt="" />
                                <h5 class="mb-3">Mutual Fund</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                                <a href="" className='readbtn'>Read More <i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item bg-white p-5">
                                <img class="img-fluid mb-4 color-change" src="img/img8.png" alt="" />
                                <h5 class="mb-3">Digital Gold</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                                <a href="" className='readbtn'>Read More <i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="service-item bg-white p-5">
                                <img class="img-fluid mb-4 color-change" src="img/img7.png" alt="" />
                                <h5 class="mb-3">Insurance</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                                <a href="" className='readbtn'>Read More <i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item bg-white p-5">
                                <img class="img-fluid mb-4 color-change" src="img/img10.png" alt="" />
                                <h5 class="mb-3">FD/Bonds</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                                <a href="" className='readbtn'>Read More <i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item bg-white p-5">
                                <img class="img-fluid mb-4 color-change" src="img/img1.png" alt="" />
                                <h5 class="mb-3">Loans/Liabilities</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                                <a href="" className='readbtn'>Read More <i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="service-item bg-white p-5">
                                <img class="img-fluid mb-4 color-change" src="img/img2.png" alt="" />
                                <h5 class="mb-3">NPS</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                                <a href="" className='readbtn'>Read More <i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container py-5'>
                <div className='text-center mx-auto'>
                    <h1 class="display-6">What We Offer?</h1>
                    <div className='App'>
                    <div className="content">
                        <div className="left-list">
                            {leftItems.map((item, index) => (
                                <ListItem
                                    key={index}
                                    item={item}
                                    direction="left"
                                />
                            ))}
                        </div>
                        <div className="center-image">
                            <img src="/img/process.png" alt="Center" />
                        </div>
                        <div className="right-list">
                            {rightItems.map((item, index) => (
                                <ListItem
                                    key={index}
                                    item={item}
                                    direction="right"
                                />
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
            </div> */}
        </>

    )
}

export default Service

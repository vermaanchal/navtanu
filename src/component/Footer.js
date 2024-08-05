import React from 'react'
import img from '../footerimg.webp';
import img1 from '../Image.png';

const Footer = () => {
    return (
        <div className=" bg-darkgreen footer pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className=" row g-5">
                    <div className="col-md-6">
                        <h1 className="text-primary mb-4"><img className="img-fluid me-2" src="img/logo.png" alt="" style={{ maxWidth: "166px" }} /></h1>
                    </div>
                    <div className="col-md-6">
                        <h5 className="mb-4">Newsletter</h5>
                        <p>To enroll for our reports and more information please enter your email.</p>
                        <div className="position-relative">
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                    </div>
            </div>
                    <div className='row g-5'>

                    <div className='col-lg-3'>
                        <h5 className="mb-4 ms-4">Our Accolades</h5>
                        <p className='text-justify'>
                            <ul>
                                <li className='mb-2'>Company name: Navtanu Investment Private Limited</li>
                                <li className='mb-2'>An ISO 9001:2015 (QMS-2024-0709Y53201) company</li>
                                <li className='mb-2'>Udyam Registration Number : UDYAM-UP-28-0116889</li>
                                <li className='mb-2'>Startup India Registration No.: DIPP166510</li>
                                <li className='mb-2'>Mutual Fund Distribution ARN: 293533</li>
                                <li className='mb-2'>Office Address: H1/A20, Sector 63, Noida, UP-201301</li>
                                <li className='mb-2'>CIN: U66190UP2023PTC191114</li>
                                <li className='mb-2'>GSTN: 09AAJCN1966G1Z5</li>
                            </ul>
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <h5 className="mb-4">Get In Touch</h5>
                        <p><i className="fa fa-map-marker-alt me-3"></i>Navtanu Investment Private Limited
                            H1/A20, Sector 63, Noida,
                            UP-201301</p>
                        <p><i className="fa fa-phone-alt me-3"></i>+919810793683</p>
                        <p><i className="fa fa-envelope me-3"></i>Founder@navtanu.com</p>
                        <p><i className="fa fa-envelope me-3"></i>www.navtanu.com</p>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="mb-4">Our Services</h5>
                        <a className="btn btn-link" href="">Net Worth</a>
                        <a className="btn btn-link" href="/mutualfunds">Mutual Fund</a>
                        <a className="btn btn-link" href="/stock">Stocks</a>
                        <a className="btn btn-link" href="/insurance">Insurance</a>
                        <a className="btn btn-link" href="/bankAccount">Bank Accounts</a>
                        <a className="btn btn-link" href="/FDs&Bonds">FDs/Bonds</a>
                        <a className="btn btn-link" href="/loans&liabilities">Loans/Liabilities</a>
                        <a className="btn btn-link" href="/NPS">NPS</a>
                        <a className="btn btn-link" href="/EPFS">EPFS</a>
                        <a className="btn btn-link" href="/digitalgold">Digital Gold</a>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="mb-4">Quick Links</h5>
                        {/* <a href="/aboutUs" className="nav-item nav-link">About</a> */}
                        <a className="btn btn-link" href="/aboutUs">About Us</a>
                        <a className="btn btn-link" href="/team">Our Team</a>
                        <a className="btn btn-link" href="/services">Our Services</a>
                        <a className="btn btn-link" href="/mutualfunds#knowledge_center">Knowledge Center</a>
                        <a className="btn btn-link" href="/reports">Reports</a>
                        <a className="btn btn-link" href="/terms_condition">Terms & Condition</a>
                        <a className="btn btn-link" href="/careers">Careers</a>
                        <a className="btn btn-link" href="/faqs">FAQs</a>
                        <a className="btn btn-link" href="/contact">Contact Us</a>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="mb-4">We are Social:</h5>
                        <div className="d-flex">
                            <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <div className='my-3'>
                            <h4>Discover Our App</h4>
                            <div className=''>
                                <div className='me-3'>
                                    <img src='img/AppStore_final.png' width={150} />
                                </div>
                                <div className='mt-4'>
                                    <img src='img/PlayStore_final.png' width={150} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="container-fluid copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <a href="#">Total Visitors</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <a href="#">Navtanu</a>, All Right Reserved.
                        </div>
                    </div>
                </div>
            </div>
            <div class="fixed-section ">
                <div class="content">
                    <img src={img1} className='piggybank' />
                    <p>Kickstart your investment journey today!</p>
                    <img src={img} className='downbtn' />
                </div>
            </div>
        </div>
    )
}

export default Footer

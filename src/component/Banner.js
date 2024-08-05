import React from 'react'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../animation2.json";
const Banner = () => {
    return (
        <>
            <div className="container-fluid hero-header bg-light py-5 mb-5 ">
                <div className="container py-5 mt-5">
                    <div className="row g-5 align-items-center">
                        {/* <div className="col-lg-6 animated fadeIn">
                            <Lottie animationData={groovyWalkAnimation} loop={true} />
                        </div> */}
                        <div className="col-lg-6">
                            <h1 className="display-4 mb-3 animated slideInDown">A Super App!<br/>
                             </h1>
                             <h2 className='display-7'>Monitor your Investments under an Umbrella</h2>
                            <p className="animated slideInDown py-3">Empowering investors with a unified view of all 
                            financial investments in a single, intuitive window.</p>
                            <a href="" className="btn btn-primary py-3 px-4 animated slideInDown rounded-pill">Download Our App to Explore More</a>
                            <div className='d-flex'>
                                <div className='pt-5'>
                                    <img src='img/AppStore_final.png' width={180} />
                                </div>
                                <div className='ms-4 pt-5'>
                                    <img src='img/PlayStore_final.png' width={180} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 animated fadeIn">
                            <Lottie animationData={groovyWalkAnimation} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Banner

import React from 'react'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../banner.json";
const Banner = () => {
    return (
        <>
            <div class="container-fluid hero-header bg-light py-5 mb-5 ">
                <div class="container py-5">
                    <div class="row g-5 align-items-center">
                        {/* <div class="col-lg-6 animated fadeIn">
                            <Lottie animationData={groovyWalkAnimation} loop={true} />
                        </div> */}
                        <div class="col-lg-6">
                            <h1 class="display-4 mb-3 animated slideInDown">Empower your Financial Future</h1>
                            <p class="animated slideInDown">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                            <a href="" class="btn btn-primary py-3 px-4 animated slideInDown">Download Our App to Explore More</a>
                        </div>
                        <div class="col-lg-6 animated fadeIn">
                            <Lottie animationData={groovyWalkAnimation} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Banner

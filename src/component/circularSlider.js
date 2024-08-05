import React, { useEffect, useRef } from 'react'
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import image1 from '../Mutual_Fund.png';
import image2 from '../Digital_Gold.png';
import image3 from '../EPFO.png';
import image4 from '../Fds_Bonds.png';
import image5 from '../Insurance.png';
import image6 from '../Loans_Liabilities.png';
import image7 from '../NPS.png';
import image8 from '../Stocks.png';
import image9 from '../Bank_Accounts.png';
import centerImage from '../offer3.webp';
import { useState } from 'react';

const CircularSlider = () => {
    const [focusElement, setFocusElement] = useState(0);
    const [isAutoRotate, setIsAutoRotate] = useState(true);
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
    const infoHeading = ["Mutual Fund", 'Digital Gold', 'EPFO', 'FDs &Bonds', 'Insurance', 'Loans &Liabilities', 'NPS',
        'Stocks', 'Bank Accounts'
    ]
    const info = ['The app will initially support users to transact on the Regular Mutual Funds Platform. Users will access real-time data on multiple mutual fund schemes,analyse fund performance through analytics, review past investments, create and plan future wealth assessments, track goals, and enjoy a seamless user experience.',
        'The app will initially support users to transact on the Regular Mutual Funds Platform. Users will access real-time data on multiple mutual fund schemes,analyse fund performance through analytics, review past investments, create and plan future wealth assessments, track goals, and enjoy a seamless user experience.',
        'The app will initially support users to transact on the Regular Mutual Funds Platform. Users will access real-time data on multiple mutual fund schemes,analyse fund performance through analytics, review past investments, create and plan future wealth assessments, track goals, and enjoy a seamless user experience.',
        'The app will initially support users to transact on the Regular Mutual Funds Platform. Users will access real-time data on multiple mutual fund schemes,analyse fund performance through analytics, review past investments, create and plan future wealth assessments, track goals, and enjoy a seamless user experience.',
        'The app will initially support users to transact on the Regular Mutual Funds Platform. Users will access real-time data on multiple mutual fund schemes,analyse fund performance through analytics, review past investments, create and plan future wealth assessments, track goals, and enjoy a seamless user experience.',
        'The app will initially support users to transact on the Regular Mutual Funds Platform. Users will access real-time data on multiple mutual fund schemes,analyse fund performance through analytics, review past investments, create and plan future wealth assessments, track goals, and enjoy a seamless user experience.',
        'The app will initially support users to transact on the Regular Mutual Funds Platform. Users will access real-time data on multiple mutual fund schemes,analyse fund performance through analytics, review past investments, create and plan future wealth assessments, track goals, and enjoy a seamless user experience.',
        'The app will initially support users to transact on the Regular Mutual Funds Platform. Users will access real-time data on multiple mutual fund schemes,analyse fund performance through analytics, review past investments, create and plan future wealth assessments, track goals, and enjoy a seamless user experience.',
        'The app will initially support users to transact on the Regular Mutual Funds Platform. Users will access real-time data on multiple mutual fund schemes,analyse fund performance through analytics, review past investments, create and plan future wealth assessments, track goals, and enjoy a seamless user experience.'];

    const imagesWithText = [
        { src: image1, text: 'Mutual Funds' },
        { src: image2, text: 'Digital Gold' },
        { src: image3, text: 'EPFO' },
        { src: image4, text: 'FDs & Bonds' },
        { src: image5, text: 'Insurance' },
        { src: image6, text: 'Loans & Liabilities' },
        { src: image7, text: 'NPS' },
        { src: image8, text: 'Stocks' },
        { src: image9, text: 'Bank Accounts' }
    ];
    useEffect(() => {
        const addHeadings = () => {
            if (!imagesWithText || imagesWithText.length === 0) {
                console.error('imagesWithText is undefined or empty');
                return;
            }
            const carouselElements = document.querySelectorAll('.rotating-carousel .fancy-carousel-elements');
            carouselElements.forEach((element, index) => {
                if (imagesWithText[index]) {
                    const h2 = document.createElement('h2');
                    h2.textContent = imagesWithText[index].text;
                    h2.style.textAlign = 'center';
                    element.parentNode.insertBefore(h2, element.nextSibling);
                }
            });
        };
        addHeadings();
    }, [imagesWithText]);

    return (
        <div className="carousel">
            <div className='carousel-container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className='static-center-image'>
                            <img src={centerImage} alt="Center" />
                        </div>
                        <FancyCarousel
                            images={imagesWithText.map(item => item.src)}
                            setFocusElement={setFocusElement}
                            carouselRadius={250}
                            peripheralImageRadius={50}
                            centralImageRadius={60}
                            focusElementStyling={{ border: '2px solid #ba4949' }}
                            borderWidth={4}
                            borderHexColor={'1c364f'}
                            className="rotating-carousel"
                            autoRotateTime={isAutoRotate ? 3 : 0}
                        />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className='info-box-wrapper2'>
                            <div className="info-box-wrapper1">
                                <h2>{infoHeading[focusElement]}</h2>
                            </div>
                            <div className="info-box-wrapper">
                                <img src={images[focusElement]} width={150} className='mx-auto d-block' />
                                <p>{info[focusElement]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CircularSlider

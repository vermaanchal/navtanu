import React, { useEffect } from 'react'
import Calculator from './Calculator'
import GoalCalculator from './GoalCalculator'
import Cards from './Cards'
import KnowledgeCentre from '../KnowledgeCentre'
import { useLocation } from 'react-router-dom';
import NFOList from './NFOList'
const MutualFund = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
    return (
        <>
            <div class="bg-light container-fluid py-5 ">
                <div class="container my-5">
                    <div className='row paddingdiv'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <div class="g-5 align-items-center">
                                <div class="wow fadeInLeft" data-wow-delay="0.1s">
                                    <h2 class="text-primary my-4 ">Mutual Funds</h2>
                                    <h4><b>Investing in mutual funds is simplified further with our invaluable interface!</b></h4>
                                    <div className='my-4 py-4'>
                                        <a href="" className="btn btn-primary py-3 px-4 animated slideInDown rounded-pill">Invest Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <img src='/img/mutualfundimage.png' className='mutualimg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div>
                    <h1 class="animated slideInDown text-primary my-4 py-4 text-center text-decoration-underline">Calculate Your Mutual Fund Investment Returns</h1>
                </div>
                <div>
                    <p className="animated slideInDown py-3 text-center">Like many investment options, the longer you invest, the larger your portfolio grows.
                        Explore your potential returns using the Mutual Funds Calculator below to estimate
                        capital gains or determine the necessary investment to reach your financial goals.</p>
                </div>
                <div>
                    <Calculator />
                </div>
                {/* <div>
                <div>
                    <h1 class="animated slideInDown text-primary my-4 py-4 text-center text-decoration-underline">Analyse your Goals</h1>
                </div>
                <div>
                    <GoalCalculator/>
                </div>
                </div> */}

                <div>
                    {/* <div>
                    <h1 class="animated slideInDown text-primary my-4 py-4 text-center text-decoration-underline">How Do You Want To Invest?</h1>
                </div>
                <div>
                    <Cards/>
                </div> */}
                </div>
            </div>
            <div className='bg-light'>
                <div className='container'>
                    <h1 class="animated slideInDown text-primary my-4 py-4 text-center text-decoration-underline">Explore Your Mutual Fund</h1>
                    <div>
                        <Cards />
                    </div>
                </div>
            </div>
            <div className='my-4'>
                <div className=''>
                    <NFOList />
                </div>
            </div>
            <div id='knowledge_center' className='bg-light'>
                <KnowledgeCentre />
            </div>

        </>
    )
}

export default MutualFund

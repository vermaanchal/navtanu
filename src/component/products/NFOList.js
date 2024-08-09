import React from 'react'

const NFOList = () => {
    return (
        <>
            <div className='mobile_view'>
                <div className='wow fadeInLeft animated firstvector'>
                    <div className='container'>
                        <div class="vector-parent ">
                            <img class="curvebgfirst" alt="" src="/img/rectangl.svg" />

                            <b class="desire-to-invest"
                            >Desire to invest in the latest New Fund Offer (NFO) launched by top AMCs?</b>
                            <div class="desire-to-invest1">
                                <p class=" animated slideInDown ps-4 mb-4 text-justify">
                                    Be one of the first to add different new funds from top fund houses to your portfolio.
                                    Diversify your portfolio and capitalize on potential capital gains by being an early
                                    investor in these innovative funds.
                                </p>
                                <p class="text ps-4 mb-4 text-justify">Enhance your investment options with NFOs, Keep track
                                    of the Net Asset Value (NAV) and seamlessly invest in these funds hassle-free through FundsIndia.
                                </p>
                            </div>
                            <img class="mask-group-icon" alt="" src="/img/sideimg.png" />

                            <div class="frame-wrapper">
                                <div class="explore-nfo-list-wrapper">
                                    <div class="explore-nfo-list">Explore NFO List</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-4  bg-light'>
                    <div className='py-4'>
                        <h1 class="animated slideInDown text-primary my-4 py-4 text-center text-decoration-underline">How Do You Want To Invest?</h1>
                    </div>
                    <div className='wow fadeInRight animated secondvector'>
                        <div className='container'>
                            <div class="vector-parent2">
                                <img class="curvebg" alt="" src="/img/rectangle3.svg" />

                                <div class="desire-to-invest3">
                                    <p class=" animated slideInDown ps-4 mb-4 text-justify">
                                        As an Individual Investor, You can invest a fixed income in Mutual Funds
                                        either as a lumpsum or through SIP. If you run into some good money,
                                        you could go for a lumpsum investment in mutual fund shares.
                                        When considering types of mutual funds, it's essential to factor
                                        in mutual fund fees, including the expense ratio and net asset value (NAV).
                                    </p>
                                    <p class="text ps-4 mb-4 text-justify">SIP, the humble hero of investing, turns small
                                        regular investments into an enormous corpus with the help of Compounding!
                                    </p>
                                    <p class="text ps-4 mb-4 text-justify">
                                        Whether you opt for fixed-income instruments or explore the variety of mutual fund shares
                                        available, understanding the net asset value and mutual fund fees is crucial for
                                        making informed investment decisions.
                                    </p>
                                </div>
                                <div className='d-flex'>
                                    <div class="explorebtnlist">
                                        <div class="explorelist-wrapper">
                                            <div class="explorenfolist">Start A SIP</div>
                                        </div>
                                    </div>
                                    {/* <div class="explorebtnlist2">
                                <div class="explorelist-wrapper2">
                                    <div class="explorenfolist2">Go Lumpsum</div>
                                </div>
                                </div> */}
                                </div>
                                <img class="mask-group-icon2" alt="" src="/img/sideimg3.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wow fadeInLeft animated thirdvector'>
                    <div className='py-4'>
                        <h1 class="animated slideInDown text-primary my-4 py-4 text-center text-decoration-underline">
                            What Else Can Mutual Funds Do?</h1>
                    </div>
                    <div className='container'>
                        <div class="vector-parent ">
                            <img class="curvebgfirst" alt="" src="/img/rectangl.svg" />
                            <div class="desire-to-invest4">
                                <p class=" animated slideInDown ps-4 mb-4 text-justify">
                                    They can SAVE TAX! Yes, you read that right. Invest in ELSS (Equity Linked Savings Scheme)
                                    to avail tax deductions. Mutual fund portfolios offer a range of investment objectives,
                                    including funds and target date funds that align with market indices.
                                </p>
                                <p class="text ps-4 mb-4 text-justify">Moreover, with professional investment management,
                                    individual investors can optimize their tax-saving potential by strategically
                                    diversifying their portfolios with tax-saving funds like ELSS.
                                    So, with Fundsindia, explore the multifaceted world of funds investing and
                                    discovering the potential for tax savings in ELSS.
                                </p>
                            </div>
                            <img class="mask-group-icon" alt="" src="/img/sideimg4.png" />

                            <div class="frame-wrapper">
                                <div class="explore-nfo-list-wrapper">
                                    <div class="explore-nfo-list">Save Tax With Funds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='desktopview'>
                <div className='wow fadeInLeft py-2 animated my-4'>
                    <img src='/img/mfmobile3.png' className='mobileimg'></img>
                </div>
                <div className='wow fadeInRight py-2 animated my-4'>
                    <img src='/img/mfmobile2.png' className='mobileimg'></img>
                </div>
                <div className=' wow fadeInLeft py-2 animated my-4'>
                    <img src='/img/mfmobile1.png' className='mobileimg'></img>
                </div>

            </div>
        </>
    )
}

export default NFOList

import React from 'react'

const KycSection = () => {
    return (
        <div>
            <div class=" mx-auto ">
                <h1 class="display-6 text-center" style={{marginTop:"60px"}}>Let us know <span class="you">You!</span></h1>
                <p class="text-center">Get your account setup super fast with us</p>
                <div class="row">
                    <div class="col">
                        <div class="right-div">
                            <img src="/img/MFimage.png" alt="Center" class="kycImg" />
                            <p class="kycPara">*Have your PAN, Bank and Aadhaar information handy</p>
                            <div className='kyccontent'>
                                <b>In some cases, the account activation may take upto 72 hours<br />
                                    as we are dependent on KRAs to process your KYC.</b>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="timeline">
                            <div class="contain right-container">
                                <img src="img/Pan.png" />
                                <div class="text-box">
                                    <p>PAN Details</p>
                                    <span class="right-container-arrow">
                                    </span>
                                </div>
                            </div>
                            <div class="contain right-container">
                                <img src="img/KYC.png" />
                                <div class="text-box">
                                    <p>KYC Details</p>
                                    <span class="right-container-arrow">
                                    </span>
                                </div>
                            </div>
                            <div class="contain right-container">
                                <img src="img/Documentandbank.png" />
                                <div class="text-box">
                                    <p>Document &amp; Bank details</p>
                                    <span class="right-container-arrow">
                                    </span>
                                </div>
                            </div>
                            <div class="contain right-container">
                                <img src="img/fatca.png" />
                                <div class="text-box">
                                    <p>FATCA</p>
                                    <span class="right-container-arrow"></span>
                                </div>
                            </div>
                            <div class="contain right-container">
                                <img src="img/Nominee.png" />
                                <div class="text-box">
                                    <p>Add your Nominee</p>
                                    <span class="right-container-arrow"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KycSection

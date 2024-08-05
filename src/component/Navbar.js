import React from 'react'
import mutual from '../Mutual_Fund.png';
import fd from '../Fds_Bonds.png';
import bank from '../Bank_Accounts.png';
import epfo from '../EPFO.png';
import nps from '../NPS.png';
import stock from '../Stocks.png';
import loan from '../Loans_Liabilities.png';
import insurance from '../Insurance.png';
import digital from '../Digital_Gold.png'
const Navbar = () => {
    return (
        <div style={{ backgroundColor: "#F2F8FE" }}>
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-navbar py-2 px-4 px-lg-5">
                <a href="/aboutUs" className="navbar-brand d-flex align-items-center">
                    <h2 className="m-0 text-primary">
                        <img className="img-fluid me-2" src="img/logo.png" alt="" style={{ width: "100px" }} />
                    </h2>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-4 py-lg-0">
                        <a href="/" className="nav-item nav-link active">Home</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" id="productsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <div className="dropdown-menu" aria-labelledby="productsDropdown">
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 d-flex'>
                                    <img src={mutual} width={38} height={38}></img>
                                <a href="/mutualfunds" className="dropdown-item">Mutual Funds</a>
                                </div>
                                <div className='col-lg-6 col-md-6 d-flex'>
                                    <img src={bank} width={38} height={38}></img>
                                <a href="/bankAccount" className="dropdown-item">Bank Accounts</a>
                                </div>
                                <div className='col-lg-6 col-md-6 d-flex'>
                                    <img src={stock} width={38} height={38}></img>
                                <a href="/stock" className="dropdown-item">Stocks</a>
                                </div>
                                <div className='col-lg-6 col-md-6 d-flex'>
                                    <img src={fd} width={38} height={38}></img>
                                <a href="/FDs&Bonds" className="dropdown-item">Fixed Deposits & Bonds</a>
                                </div>
                                <div className='col-lg-6 col-md-6 d-flex'>
                                    <img src={insurance} width={38} height={38}></img>
                                <a href="/insurance" className="dropdown-item">Insurance</a>
                                </div>
                                <div className='col-lg-6 col-md-6 d-flex'>
                                    <img src={digital} width={38} height={38}></img>
                                <a href="/digitalgold" className="dropdown-item">Digital Gold</a>
                                </div>
                                <div className='col-lg-6 col-md-6 d-flex'>
                                    <img src={nps} width={38} height={38}></img>

                                <a href="/NPS" className="dropdown-item">NPS</a>
                                </div>
                                <div className='col-lg-6 col-md-6 d-flex'>
                                    <img src={epfo} width={38} height={38}></img>
                                <a href="/EPFO" className="dropdown-item">EPFO</a>
                                </div>
                                <div className='col-lg-6 col-md-6 d-flex'>
                                    <img src={loan} width={38} height={38}></img>
                                <a href="/loans&liabilities" className="dropdown-item">Loans &Liabilities</a>
                                </div>
                            </div>
                            </div>
                            {/* <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                                <li><a href="/mutualfunds" className="dropdown-item">Mutual Funds</a></li>
                                <li><a href="/bankAccount" className="dropdown-item">Bank Accounts</a></li>
                                <li><a href="/stock" className="dropdown-item">Stocks</a></li>
                                <li><a href="/FDs&Bonds" className="dropdown-item">Fixed Deposits & Bonds</a></li>
                                <li><a href="/insurance" className="dropdown-item">Insurance</a></li>
                                <li><a href="/digitalgold" className="dropdown-item">Digital Gold</a></li>
                                <li><a href="/NPS" className="dropdown-item">NPS</a></li>
                                <li><a href="/EPFO" className="dropdown-item">EPFO</a></li>
                                <li><a href="/loans&liabilities" className="dropdown-item">Loans &Liabilities</a></li>
                            </ul> */}
                        </div>
                        <a href="/aboutUs" className="nav-item nav-link">About</a>
                        <a href="/services" className="nav-item nav-link">Why Navtanu</a>
                        <a href="/contact" className="nav-item nav-link">Contact</a>
                    </div>
                    <div className="h-100 d-lg-inline-flex align-items-center d-none">
                        <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square rounded-circle bg-light text-primary me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-square rounded-circle bg-light text-primary me-0" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar

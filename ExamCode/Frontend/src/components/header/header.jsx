import React from 'react'
import "./header.scss"
import { BsBusFrontFill } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
function Header() {
    return (
        <div className='container'>
            <div className='header-top'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Catalogue</li>
                    <li>New Arrivals</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='section1'>

                <div className='siderBar'>


                    <h1>Finding Your Perfect Shoes</h1>

                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</b>
                    <br />
                    <br />
                    <button className='sec-btn'>Shop Now</button>
                </div>

            </div>

            <div className='shopping'>
                <div className='class-shop'>
                    <div className='div-bottom'>
                        <div className='free-ship'>
                            < BsBusFrontFill style={{ color: "rgb(121, 113, 234)", fontSize: "60px" }} />
                            <h5>FREE SHIPPING</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.

                            </p>
                        </div>
                        <div className='free-returns'>
                            <FaExchangeAlt style={{ color: "rgb(121, 113, 234)", fontSize: "60px" }} />
                            <h5>Free Returns</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                        <div className='customer-sup'>
                            <CiCircleQuestion style={{ color: "rgb(121, 113, 234)", fontSize: "60px" }} />
                            <h5>CUSTOMER SUPPORT</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
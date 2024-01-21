// eslint-disable-next-line no-unused-vars
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

import "./navbar.scss"
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='container'>
            <div className='nav-top'>
                <div className='nav-bottom'>
                    <input type="text" placeholder='Search' />
                    <button className='shopBtn'>Shoppers</button>
                    <div className='icons'> <CiUser />
                        <Link to={"/wish"}><CiHeart /></Link>
                        <Link to={"/add"}><CiShoppingCart /></Link>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
import React from 'react'
import Navbar from './navbar/navbar'

import Header from './header/header'
import Shop from '../shopping/shop'
import Swiper from "./swiper/swiper"
import Footeer from "./footers/fo0ter"
function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Shop />
            <Swiper />
            <Footeer />
        </div>
    )
}

export default Home
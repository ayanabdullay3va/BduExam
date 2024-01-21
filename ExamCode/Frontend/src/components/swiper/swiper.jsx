import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiper.scss';

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default function App() {
    const [data, setData] = useState("")

    useEffect(() => {
        axios.get("http://localhost:3003/users").then(res => {
            setData(res.data)
        })
    })
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                zoom={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Zoom, Navigation, Pagination]}
                className="mySwiper"
            >{data && data.map((elem) => {
                return (<>

                    <SwiperSlide>
                        <div className="swiper-zoom-container3">

                            <img src={elem.image} />
                            <p>{elem.name}</p>
                            <p>{elem.descriptions}</p>
                            <p>{elem.price}</p>
                        </div>
                    </SwiperSlide>


                </>)

            })}

            </Swiper>
        </>
    );
}

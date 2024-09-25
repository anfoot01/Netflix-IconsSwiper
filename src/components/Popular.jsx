
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import "./Popular.scss";
import breakingBad from "../assets/popular1.png";
import theRain from "../assets/popular2.png";
import lifeInAYear from "../assets/popular3.png";
import moneyHeist from "../assets/popular4.png";
import squidGame from "../assets/popular5.png";
const Popular = () => {
    return (
        <div className='popular'>
            <h1 className="popular__title">POPULAR THIS WEEK</h1>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={breakingBad} alt="Breaking Bad" /></SwiperSlide>
        <SwiperSlide> <img src={theRain} alt="The Rain" /></SwiperSlide>
        <SwiperSlide><img src={lifeInAYear} alt="Life in a Year" /></SwiperSlide>
        <SwiperSlide><img src={moneyHeist} alt="Money Heist" /></SwiperSlide>
        <SwiperSlide><img src={squidGame} alt="Squid Game" /></SwiperSlide>
      </Swiper>
            
        </div>
    );
};

export default Popular;
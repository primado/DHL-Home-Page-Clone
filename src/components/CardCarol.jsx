import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../CSS/style.css"

// import required modules
import { Pagination, Navigation } from "swiper";

export default function CardCarol() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={-45}
        Navigation={{
          clickable:true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        { data.map(  item =>   
          <SwiperSlide key={item.id} className="mySlider"> 
            <div className="carol">
                  <div className="carol-content">
                      <img className="carol-img" src={`/images/${item.cardImage}`} alt="ship like a pro" />
                      <div className="carol--content">
                        <h1>{item.title}</h1>
                        <div className="carol-desc">{ item.description }</div>
                        <div className="carol--link">
                            <a href="#">{item.link_text}</a>
                        </div>
                      </div>
                  </div>
              </div>
          </SwiperSlide>
        )}
        
        
      </Swiper>
    </>
  );
}

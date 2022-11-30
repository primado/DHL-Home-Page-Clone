import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import dhl_journey from "../images/dhl-journey.png"
import flexible from "../images/flexible.jpg"
import not_home from "../images/not-home.jpg"
import ship_like_pro from "../images/ship-like-pro.jpg"
import battary from "../images/batteries.jpg"
import save_shipping from "../images/save-shipping.jpg"

import "../CSS/style.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function App() {
  return (
    <>
      <section id="main-cardCarol">
        <Swiper
          cssMode={true}
          navigation={{clickable: true}}
          pagination={{clickable: true}}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide className="mySlider">
            <div className="carol">
                <img className="carol-img" src={ship_like_pro} alt="ship like a pro" />
                <div className="carol-content">
                    <h1>Ship Like a Pro</h1>
                    <div className="carol-desc">
                        Get access to powerful and time-saving
                        customizable features found only in MyDHL+.
                    </div>
                    <div className="carol--link">
                        <a href="#">Create a Login and Ship</a>
                    </div>
                </div>
            </div>

            <div className="carol">
                <img className="carol-img" src={save_shipping} alt="ship like a pro" />
                <div className="carol-content">
                    <h1>Save on Frequent Shipping</h1>
                    <div className="carol-desc">
                     Get preferred rates, billing options and other
                     great benefits of having a DHL Express account!
                    </div>
                    <div className="carol--link">
                        <a href="#">Create a Login and Ship</a>
                    </div>
                </div>
            </div>
            <div className="carol">
                <img className="carol-img" src={dhl_journey} alt="ship like a pro" />
                <div className="carol-content">
                    <h1>Save on Frequent Shipping</h1>
                    <div className="carol-desc">
                     Get preferred rates, billing options and other
                     great benefits of having a DHL Express account!
                    </div>
                    <div className="carol--link">
                        <a href="#">Create a Login and Ship</a>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

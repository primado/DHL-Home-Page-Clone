import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import customs from "../images/dhl-customs.jpg"
import dhl_express from "../images/dhl-express-delivery.jpg"
import dhl_journey from "../images/dhl-journey-001.jpg"
import dhl_prepare from "../images/dhl-prepare.jpg"
import inter_shipping from "../images/inter-shipping.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../CSS/style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Carousel() {
  return (
    <>
    <section className="main-carousel">
      <Swiper
        cssMode={true}
        navigation={{ clickable: true}}
        pagination={{clickable: true}}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        
        <SwiperSlide>
            <div className="swiper--content">
                <div className="side--content side--content-one">
                    <h1>The Journey of a Package</h1>
                    <div className="swiper--desc">
                        Watch how your package travels with DHL and 
                        learn how we can help you with each step of the journey.
                    </div>
                    <div className="swiper-link">
                        <a className="on-swiper-link" href="#">
                            Follow the Journey
                        </a>
                    </div>
                </div> 
                <div className="swiper--long-img">
                    <img src={dhl_journey} alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper--content">
                <div className="side--content side--content-two">
                    <h1>DHL Express Delivers</h1>
                    <div className="swiper--desc">
                    With international reach and local teams, 
                    we offer time definite door-to-door delivery around the world.
                    </div>
                    <div className="swiper-link">
                        <a className="on-swiper-link" href="#">
                            Get Shipping Advice
                        </a>
                    </div>
                </div> 
                <div className="swiper--long-img">
                    <img src={dhl_express} alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper--content">
                <div className="side--content side--content-three">
                    <h1>New to International Shipping?</h1>
                    <div className="swiper--desc">
                        We’re specialists in international shipping! We’ve got 
                        tips and advice to help you ship with confidence.
                    </div>
                    <div className="swiper-link">
                        <a className="on-swiper-link" href="#">
                            Get Shipping Advice
                        </a>
                    </div>
                </div> 
                <div className="swiper--long-img">
                    <img src={inter_shipping} alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper--content">
                <div className="side--content side--content-four">
                    <h1>Prepare Your Package for the Journey</h1>
                    <div className="swiper--desc">
                        Watch how your package travels with DHL and 
                        learn how we can help you with each step of the journey.
                    </div>
                    <div className="swiper-link">
                        <a className="on-swiper-link" href="#">
                            Packing with Care
                        </a>
                    </div>
                </div> 
                <div className="swiper--long-img">
                    <img src={dhl_prepare} alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper--content">
                <div className="side--content side--content-five">
                    <h1>We Know Customs</h1>
                    <div className="swiper--desc">
                        Shipping to over 200 countries and territories – we’ve 
                        established a wealth of customs expertise.
                    </div>
                    <div className="swiper-link swiper-link-five">
                        <a className="on-swiper-link on-swiper-link-five" href="#">
                            Customs Clearance Advice
                        </a>
                    </div>
                </div> 
                <div className="swiper--long-img">
                    <img src={customs} alt="" />
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
    </>
  );
}

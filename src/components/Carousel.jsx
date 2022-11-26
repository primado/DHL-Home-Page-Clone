import React from "react"
import customs from "../images/dhl-customs.jpg"
import dhl_express from "../images/dhl-express-delivery.jpg"
import dhl_journey from "../images/dhl-journey.png"
import dhl_prepare from "../images/dhl-prepare.jpg"


export default function Carousel() {
    return (
        <div>
            <section id="carousel-sec">
                <div className="swiper">
                    {/* AdditionalSwipper Wrapper */}

                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="swiper-content">
                                <div className="swiper--con">
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
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
 
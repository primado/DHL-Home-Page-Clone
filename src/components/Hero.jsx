import React from "react"

import "../CSS/style.css"


export default function Hero() {
    return (
        <div>
            <header id="header">
                <div className="hero-content">
                    <div className="hero-first-sec">
                        <div className="welcome-msg">
                            <p>Welcome to
                                <h1>DHL Express</h1>
                                Over 50 years of international 
                                shipping expertise
                            </p>
                        </div>
                        <div className="form-shipment">
                            <form className="form-shipment-form" action="#">
                                <h2>Get Started Now</h2>

                                <div className="input-form">
                                    <input type="text" className="new-shipment" placeholder="Create a New Shipment"/>
                                    <input type="text" className="rate--quote" placeholder="Get a Rate and and Time Quote"/>
                                    <input type="text" className="pickup"placeholder="Schedule a Pickup"/>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                <div className="hero-cards">
                    <div className="long-card">
                        <div className="card--one">
                            <a href="#">
                                <div className="card-icon">
                                    <i class="fa-solid fa-tag"></i>
                                </div>
                                <div className="card--desc">
                                    Get Quote
                                </div>
                            </a>
                        </div>
                        <div className="card--one card--two">
                            <a href="#">
                                <div className="card-icon">
                                    <i class="fa-solid fa-globe"></i>
                                </div>
                                <div className="card--desc">
                                    Delivery Services
                                </div>
                            </a>
                        </div>
                        <div className="card--one">
                            <a href="#">
                                <div className="card-icon">
                                    <i class="fa-solid fa-location-pin"></i>
                                </div>
                                <div className="card--desc">
                                    Find Location
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
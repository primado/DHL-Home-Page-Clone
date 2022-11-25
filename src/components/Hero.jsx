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
            </header>
        </div>
    )
}
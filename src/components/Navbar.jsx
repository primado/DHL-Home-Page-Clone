import React from "react";
import dhl_logo from "../images/dhl-logo.svg"
import search_30 from "../images/search-30.png"
import "../CSS/style.css"


export default function Navbar() {
    return (
        <div>
            <nav id="nav">
                <div className="top-navbar">
                    <div className="dhl--logo">
                        <img src={dhl_logo} alt="DHL Logo" />
                        <div className="express">
                            <h3>DHL Express</h3>
                        </div>
                    </div>

                    <div className="top-rt-nav">
                        <a href="#">Help and Support</a>
                        <a href="#">Find a location</a> |
                        <img src={search_30} alt="search icon" />
                    </div>
                </div>
                <hr className="top-underline" />

                <div className="down-nav">
                    <div className="down-lt-nav">
                        <a className="home-link" href="#">Home</a>
                        <div className="dropdown">
                            <button className="dropbtn">Ship</button>
                            <div className="dropdown-content">
                                <div className="ship-dropdown">
                                    <div className="ship--one">
                                        <h4>Get Started Now</h4>
                                        <a href="#">Order Supplies</a>
                                    </div>
                                    <div className="ship--two">
                                        <h4>Explore</h4>
                                        <a href="#">Delivery Services</a>
                                        <a href="#">Optional Services</a>
                                        <a href="#">Customs Services</a>
                                        <a href="#">Surchages</a>
                                        <a href="#">Solutions</a>
                                    </div>
                                    <div className="ship--three">
                                        <h4>MYDHL+LEARN</h4>
                                        <a href="#">About MyDHL+</a>
                                        <a href="#">What's New With MyDHL+</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropbtn">Track</button>
                        </div>

                    </div>

                    <div className="down-rt-nav">
                        <a href="#">Register</a>
                        <a href="#">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
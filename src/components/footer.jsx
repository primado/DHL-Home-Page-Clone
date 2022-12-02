import React from "react";

import "../CSS/style.css"



export default function Footer() {
    return (
        <div>
            <footer>
                <div className="foot-container">
                    <div className="lt-content">
                        <div className="col--x">
                            <h3>CONTACT AND SUPPORT</h3>
                            <a href="#">Help and Support</a>
                            <a href="#">FAQs</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Find a location</a>
                        </div>

                        <div className="col--x">
                            <h3>LEGAL</h3>
                            <a href="#">Terms and Conditions</a>
                            <a href="#">Privacy Notice</a>
                        </div>

                        <div className="col--x">
                            <h3>ALERTS</h3>
                            <a href="#">Fraud Awareness</a>
                            <a href="#">Important Information</a>
                        </div>
                    </div>

                    <div className="rt-content">
                        <div className="col--x1">
                            <h1>Deutsche Post DHL Group</h1>
                            <a href="#">About DHL</a>
                            <a href="#">Press</a>
                            <a href="#">Careers</a>
                            <a href="#">Legal Notice</a>
                        </div>
                    </div>
                </div>
                <div className="socials">
                    <div className="lt-sol">
                        <h3>Follow Us</h3>
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <div className="rt-sol">
                        <a href="#">Cookies Settings</a>
                        <p>2022 © Deutsche Post AG - All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
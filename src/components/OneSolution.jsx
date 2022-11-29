import React from "react"
import one_solution from "../images/many-benfits.png"
import "../CSS/style.css"


export default function OneSolution() {
    return (
        <div>
            <section id="main-solution">
                <div className="solution">
                    <div className="sol--flex">
                        <img src={one_solution} alt="one solution" />
                        <div className="sol--content">
                            <h1>One Solution, Many Benefits</h1>
                            <div className="sol--desc">
                                MyDHL+ makes it easier than ever to ship online, 
                                get quotes, schedule pickups, find locations, track shipments and more!
                            </div>
                            <div className="sol--link">
                                <a href="#">Get Started – Create a Shipment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
import React from "react"



export default function NewCard({i}) {
    return (
        <div>
            <div className="carol">
                  <div className="carol-content">
                      <img className="carol-img" src={`../images/${props.card_image}`} alt="ship like a pro" />
                      <div className="carol--content">
                        <h1>{props.title}</h1>
                        <div className="carol-desc">{ props.description }</div>
                        <div className="carol--link">
                            <a href="#">{props.link_text}</a>
                        </div>
                      </div>
                  </div>
              </div>
        </div>
    )
}
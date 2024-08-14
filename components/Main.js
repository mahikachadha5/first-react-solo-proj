import React from "react"

export default function Main () {
    return (
        <div>
            
            <h1 className="home-base">My Home Base</h1>
            <div className="main--location-container">
                <img src="./images/locationIcon.png"/>
                <p className = "main-location">MADRID, SPAIN</p>
            </div>
            <h2 className="in-madrid-i">Throughout my time in Madrid I...</h2>
            <div className="main--image-container">
                <div className="image-wrapper">
                    <img src="./images/churros.png" alt="Churros" />
                    <div className="overlay-text">ate lots of churros :)</div>
                </div>
                <div className="image-wrapper">
                    <img src="./images/soccer.png" alt="Soccer" />
                    <div className="overlay-text">watched a real madrid fútbol game!</div>
                </div>
                <div className="image-wrapper">
                    <img src="./images/rainbow.png" alt="Rainbow" />
                    <div className="overlay-text">admired countless views</div>
                </div>
            </div>
        </div>
    )
}
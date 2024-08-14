import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.item.imageUrl}`} className="card--image"/>
            <div className="card-content">
            
                <div className="card--location-container">
                    <img src="./images/locationIcon.png"/>
                    <p className = "card--location"> {props.item.location.toUpperCase()}</p>
                    <a className="google-maps-link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                
                <div className="card-details">
                    <h1 className="card--title">{props.item.title}</h1>
                    <h3 className="card--date">{`${props.item.startDate} - ${props.item.endDate}`}</h3>
                    <p className="card--description">{props.item.description}</p>
                </div>
            </div>
        </div>
        
    )
}
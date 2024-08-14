import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Main from "./components/Main"
import data from "./data"


export default function App() {
    const travelCards = data.map((item) => 
            <Card
                key={item.title}
                item={item}
            />
    )  
     
    return (
        <div>
            <Navbar />
            <Main />
            <h1 className="weekend-title">Weekend Trips</h1>
            <section className="card-list"> 
                {travelCards}
            </section>
        </div>
    )
}
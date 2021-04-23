import React from 'react'
// import {Card} from 'react-bootstrap'
export default function Weather(props) {
    return (
        <div className="container">
            <div className="cards">
                <h1>{props.city},{props.country}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                <h1 className="py-2">{props.temp}&deg;c</h1>
                {/* For min max temp display */}
                {minmaxTemp(props.minTemp,props.maxTemp)}
                <h4 className="py-2">{props.description}</h4>
                
            </div>
            {/* Storing content in a card */}
            {/* <Card className="bg-dark text-white">
                <Card.Img src="holder.js/100px270" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card> */}
        </div>
        
    )
}
const minmaxTemp=(min,max)=>{
    return(
        <h3>
            <span className="px-4">{min}&deg;c</span>
            <span className="px-4">{max}&deg;c</span>
        </h3>
    )
}

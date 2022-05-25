import React from "react";

const Weather = ({description,date, city, humidity, sunrise, sunset, temperature}) =>{
    return(
        <>
            <div className="main">
                <div className="header d-flex">
                    <h2>{city}</h2>
                    {/* <div>Refress</div> */}
                </div>
                <div className="body">
                    <div className="d-flex">
                        <h2>{date} </h2>
                        <h2>{description}</h2>
                    </div>
                    <div className="d-flex">
                        <span>Temperature: {temperature} °C</span>
                        <span>humidity: {humidity}%</span>
                    </div>
                    <div className="d-flex">
                        <span>Sunrise: {sunrise} am</span>
                        <span>Sunset: {sunset} pm</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Weather;


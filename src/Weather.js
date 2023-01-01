import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    description: " Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temp: "22",
    precipitation: "0%",
    humidity: "60%",
    wind: "2 km/h"
  };
  return (
    <div className=" Weather ">
      <div className="row">
        <div className="col-6 d-flex justify-content-start">
          <span className="img">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
          </span>
          <span>
            <strong> {weatherData.temp} </strong>
            <span className="units">
              <a href="/">℃ </a>| <a href="/">℉°</a>
            </span>
          </span>
        </div>
        <div className="col">
          <ul>
            <li>Precipitation : {weatherData.precipitation}</li>
            <li>Humidity : {weatherData.humidity}</li>
            <li>Wind : {weatherData.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Location.css";

export default function Location() {
  let locationData = {
    city: "Lviv",
    day_hour: "Thursday 13:00",
    data: "25 August",
    description: "Cloudy"
  };
  return (
    <div className="Location">
      <h1> {locationData.city} </h1>
      <ul>
        <li>
          Last updated: <span> {locationData.day_hour}</span>
        </li>
        <li>{locationData.data}</li>
        <li>{locationData.description}</li>
      </ul>
    </div>
  );
}

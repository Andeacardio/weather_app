import React from "react";
import "./currentweather.css";

export default function CurrentWeather({ data }) {
  return (
    <div className="currentweather">
      <div className="currentweather__top">
        <div className="currentweather__info">
          <p className="currentweather__city">{data.city}</p>
          <p className="currentweather__desc">{data.weather[0].description}</p>
        </div>
        <img
          className="currentweather__icon"
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather img"
        />
      </div>
      <div className="currentweather__bottom">
        <p className="currentweather__temprature">
          {Math.round(data.main.temp)}°C
        </p>
        <div className="currentweather__details">
          <div className="currentweather__parameter-row">
            <span className="currentweather__parametr-label ">Details</span>
          </div>
          <div className="currentweather__parameter-row">
            <span className="currentweather__parametr-label">Feels like </span>
            <span className="currentweather__parametr-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="currentweather__parameter-row">
            <span className="currentweather__parametr-label">Wind </span>
            <span className="currentweather__parametr-value">
              {data.wind.speed} m/s
            </span>
          </div>
          <div className="currentweather__parameter-row">
            <span className="currentweather__parametr-label">Humidity </span>
            <span className="currentweather__parametr-value">
              {data.main.humidity}%
            </span>
          </div>
          <div className="currentweather__parameter-row">
            <span className="currentweather__parametr-label">Pressure </span>
            <span className="currentweather__parametr-value">
              {data.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const MainForecast = ({ item, forecastDays, idx }) => {
  return (
    <>
      <div className="daily-item">
        <img
          src={`icons/${item.weather[0].icon}.png`}
          className="icon-small"
          alt="weather"
        />
        <label className="day">{forecastDays[idx]}</label>
        <label className="description">{item.weather[0].description}</label>
        <label className="min-max">
          {Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C
        </label>
      </div>
    </>
  );
};

export default MainForecast;

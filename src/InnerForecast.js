import React from "react";

const InnerForecast = ({ item }) => {
  return (
    <>
      <div className="daily-details-grid">
        <div className="daily-details-grid-item">
          <label>Pressure:</label>
          <label>{item.main.pressure}</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Humidity:</label>
          <label>{item.main.humidity}</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Clouds:</label>
          <label>{item.clouds.all}%</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Wind speed:</label>
          <label>{item.wind.speed} m/s</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Sea level:</label>
          <label>{item.main.sea_level}m</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Feels like:</label>
          <label>{item.main.feels_like}°C</label>
        </div>
      </div>
    </>
  );
};

export default InnerForecast;

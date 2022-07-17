import React, { useState } from "react";
import InnerForecast from "./InnerForecast";
const MainForecast = ({ item, forecastDays, idx }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        className="daily-item"
        onClick={() => {
          setShow(!show);
        }}
      >
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

      {show ? <InnerForecast item={item} key={idx + forecastDays} /> : ""}
    </div>
  );
};

export default MainForecast;

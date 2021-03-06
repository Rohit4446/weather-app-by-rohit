import React, { useState } from "react";

import "./forecast.css";
import MainForecast from "./MainForecast";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  //console.log(data)

  return (
    <>
      <label className="title">Weekely Forecast</label>

      {data.splice(0, 7).map((item, idx) => {
        return (
          <div id="mainForecast">
            <MainForecast
              key={idx + forecastDays}
              item={item}
              forecastDays={forecastDays}
              idx={idx}
            />
          </div>
        );
      })}
    </>
  );
};

export default Forecast;

//

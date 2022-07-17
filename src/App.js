import React, { useEffect, useState } from "react";
import "./styles.css";
import Search from "./Search";
import CurrentWeather from "./Current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

const App = () => {
  const [location, setLocation] = useState({
    status: false
  });
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const getLocation = (loc) => {
    setLocation(loc);
  };
  //console.log(location);
  const handleOnSearchChange = (location) => {
    // console.log(location);
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        //console.log(weatherResponse);
        setCurrentWeather({
          weather: weatherResponse.weather,
          main: weatherResponse.main,
          wind: weatherResponse.wind,
          name: weatherResponse.name,
          country: weatherResponse.sys.country
        });

        //  setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log("error"));
  };

  useEffect(() => {
    location.status && handleOnSearchChange(location);
  }, [location]);
  //console.log(currentWeather + "ok");

  return (
    <div className="App">
      <Search getLocation={getLocation} />

      {currentWeather !== null && <CurrentWeather data={currentWeather} />}
    </div>
  );
};

export default App;

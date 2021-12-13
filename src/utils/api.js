import { useState, useEffect } from "react";
require("dotenv").config();

const { openWeather_apiKey } = process.env;

const isDesiredIndex = (_, i);

const createApiUrl = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${openWeather_apiKey}`;
};

const useWeatherData = (lat, lon, options) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  const apiUrl = createApiUrl(lat, lon, options);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error(`The status of the response is: ${res.status}`);
        }
        const data = await res.json();

        const dataArr = data.daily.filter(isDesiredIndex).map((d) => {
          const { dt_txt, temp, weather } = d;

          const icon = weather[0].icon.slice(0, -1);
          const min = temp.min.toFixed();
          const max = temp.max.toFixed();
          const date = new Date(dt_txt).toLocaleDateString("en-US", {
            weekday: "short",
          });

          return { date, max, min, icon };
        });

        setData(dataArr);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    getWeatherData();
  }, [apiUrl]);

  return {
    loading: isLoading,
    error,
    data,
  };
};

export { useWeatherData };

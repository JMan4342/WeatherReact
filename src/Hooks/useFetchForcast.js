import { useState } from "react";

require("dotenv").config();

const { REACT_APP_API_KEY } = process.env;

const useFetchForcast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const getLatLon = async (query) => {
    const { data } = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));

    console.log({ data });
    if (!data || data.length === 0) {
      setError("There is no such location");
      setLoading(false);
      return;
    }
    return data[0];
  };

  const getForcastData = async (lat, lon) => {
    const { data } = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${REACT_APP_API_KEY}`
        )
        .then((res) => res.json())
        .then((data) => setData(data));

        if (!data || data.length === 0) {
            setError("Something went wrong");
            setLoading(false);
            return;
          }
          return data;
      
  }

  const submitRequest = async query => {
      setLoading(true);
      setError(false);

      const response = await getLatLon(query);
      if(!response?.lat || !response?.lon) return;
      const data = await getForcastData(response[0].lat, response[0].lon);

      console.log({data})
  }

  return { 
      isError,
      isLoading,
      data,
      submitRequest,
  }
};

export default useFetchForcast;

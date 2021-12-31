import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Conditions from "../Conditions/Conditions";

require("dotenv").config();

const { REACT_APP_API_KEY } = process.env;

const Forcast = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  console.log("query", query);
  console.log("city", city);

  const inputHandler = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setCity(query);
    setQuery("");
  };

  const [response] = 
    useFetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${REACT_APP_API_KEY}`
  );

  // const { lat, lon } = response[0]
  const lat = 
  // response[0].lat
  '47.60357'
  ;
  const lon = 
  // response[0].lon
  '-122.32945'
  ;

  const [data] = useFetch(
    // `https://api.openweathermap.org/data/2.5/forecast?q=phoenix&appid=${REACT_APP_API_KEY}`
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${REACT_APP_API_KEY}`
    // `https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=${REACT_APP_API_KEY}`
  );
  console.log("hello", data);

  // var array = Object.entries(data)
  // console.log('hello', array)
  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="search"
            placeholder="Enter City"
            value={query}
            onChange={inputHandler}
            //   onKeyPress={search}
          />
          <input type="submit" />
        </form>
      </div>
      <div>
        {
        data &&
          data.daily.map((data) => {
            const date = new Date(data.dt*1000).toLocaleDateString('en-US');
            return (

            <div key={data.dt}>
            <p>{date}</p>
            <p>{Math.floor(data.temp.day)}&#8457;</p>
            </div>
            )
          })}
      </div>
    </div>
  );
};

export default Forcast;

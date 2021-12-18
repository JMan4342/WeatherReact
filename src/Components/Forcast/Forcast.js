import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Conditions from "../Conditions/Conditions";

require("dotenv").config();

const { REACT_APP_API_KEY } = process.env;

const Forcast = () => {
  
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  console.log("query", query)
  console.log("city", city)

  const inputHandler = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    setCity(query);
    setQuery("");
  };
  
  const [response] = useFetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${REACT_APP_API_KEY}`
  );
  console.log("City Data:", response);
  // const { lat } = response[0].lat;
  // console.log("lat", lat);

  
  const [data] = useFetch(
    // `https://api.openweathermap.org/data/2.5/forecast?q=phoenix&appid=${REACT_APP_API_KEY}`
    `https://api.openweathermap.org/data/2.5/onecall?lat=33.44277&lon=-112.072754&appid=${REACT_APP_API_KEY}`
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

      {/* {data &&
        data.map((current) => {
          return <p key={current.dt}>{current.temp}</p>;
        })
        } */}
      {/* {JSON.stringify(data)} */}
      <Conditions data={data} />
    </div>
  );
};

export default Forcast;

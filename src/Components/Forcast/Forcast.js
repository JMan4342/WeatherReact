import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Conditions from "../Conditions/Conditions";
import useFetchForcast from "../../Hooks/useFetchForcast";
import SearchForm from "../SearchForm/SearchForm";

require("dotenv").config();

const { REACT_APP_API_KEY } = process.env;

const Forcast = () => {
  const { isError, isLoading, data, submitRequest } = useFetchForcast();

  const onSubmit = (value) => {
    submitRequest(value);
    console.log({value})
  };

  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  // const [isError, setError] = useState(false);
  // const [isLoading, setLoading] = useState(false);
  // console.log({ query });
  // console.log({ city });

  // const inputHandler = (event) => {
  //   event.preventDefault();
  //   setQuery(event.target.value);
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   if (!query || query === "") return;
  //   setCity(query);
  //   setQuery("");
  // };

  // ******************************************
  // ******************************************
  // ******************************************
  // *** FIRST ATTEMPT AT ASYNC AWAIT FOR TWO API CALLS ***
  // *** GETTNG ERROR THAT CANNOT USE useFetch HOOK IN FUNCTION ***
  // *** CODE MOVED TO useFetchForcast HOOK ***
  // const getLatLon = async (query) => {
  //   const { data } = await useFetch(
  //     `https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${REACT_APP_API_KEY}`
  //   );
  //   console.log({ data });
  //   if (!data || data.length === 0) {
  //     setError("There is no such location");
  //     return;
  //   }
  //   return data;
  // };

  // const getForcastData = async (lat, lon) => {
  //   const { data } = await useFetch(
  //     `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${REACT_APP_API_KEY}`
  //   );
  //   console.log({ data });
  //   if (!data || data.length === 0) {
  //     setError("Something went wrong");
  //     return;
  //   }
  //   return data;
  // };

  // const fetchWeather = async (query) => {
  //   const response = await getLatLon(query);
  //   const data = await getForcastData(response[0].lat, data[0].lon);
  // };

  // ******************************************
  // ******************************************
  // ******************************************
  // *** ORIGINAL RESPONSE FETCH FOR SEARCH ***
  // const [response] = useFetch(
  //   `https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${REACT_APP_API_KEY}`
  // );
  // console.log({response});

  // *** ORIGINAL DATA FETCH FOR HARDCODED ITEMS ***
  // const { lat, lon } = response[0]
  // const lat =
  // response && response[0].lat;
  // ("47.60357");
  // const lon =
  // response && response[0].lat;
  // ("-122.32945");

  // const [data] = useFetch(
  // `https://api.openweathermap.org/data/2.5/forecast?q=phoenix&appid=${REACT_APP_API_KEY}`
  // `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${REACT_APP_API_KEY}`
  // `https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=${REACT_APP_API_KEY}`
  // );
  // console.log({data});

  // var array = Object.entries(data)
  // console.log('hello', array)
  return (
    <div>
      <div>
        {/* <form onSubmit={submitHandler}>
          <input
            type="text"
            className="search"
            placeholder="Enter City"
            value={query}
            onChange={inputHandler}
            //   onKeyPress={search}
          />
          <input type="submit" />
        </form> */}
        {!isLoading && <SearchForm submitSearch={onSubmit} />}
      </div>
      <div>
        {/* {data &&
          data.daily.map((data) => {
            const date = new Date(data.dt * 1000).toLocaleDateString("en-US");
            return (
              <div key={data.dt}>
                <p>{date}</p>
                <p>{Math.floor(data.temp.day)}&#8457;</p>
              </div>
            );
          })} */}
      </div>
    </div>
  );
};

export default Forcast;

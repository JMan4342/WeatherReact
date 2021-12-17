import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch";

require("dotenv").config();

const { REACT_APP_API_KEY } = process.env;

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");

  const [data] = useFetch(
    // `https://api.openweathermap.org/data/2.5/forecast?q=phoenix&appid=${REACT_APP_API_KEY}`
    `https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${REACT_APP_API_KEY}`
    // `https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=${REACT_APP_API_KEY}`
    );
    console.log("City Data:", data)


  const inputHandler = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const submitHandler = () => {
      setCity(query);
  }

  return (
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
  );
};

export default SearchForm;

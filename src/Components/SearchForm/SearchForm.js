import React, { useState } from "react";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");

  const inputHandler = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!query || query === "") return;
    setCity(query);
    setQuery("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="search"
          placeholder="Enter City"
          required
          value={query}
          onChange={inputHandler}
          //   onKeyPress={search}
        />
        <button type="submit" onClick={submitHandler}>
          search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

import useFetch from "../../Hooks/useFetch";

require("dotenv").config();

const { REACT_APP_API_KEY } = process.env;

export async function getLatLong(query) {
  const [data] = useFetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${REACT_APP_API_KEY}`);
    return data.json()
};

export async function getWeather(data) {
  let {lat, long } = data[0];
  const [data] = useFetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${REACT_APP_API_KEY}`);
    return data.json()
}
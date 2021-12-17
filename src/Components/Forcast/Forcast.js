import useFetch from "../../Hooks/useFetch";
import Conditions from "../Conditions/Conditions"

require("dotenv").config();

const { REACT_APP_API_KEY } = process.env;

const Forcast = () => {
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

import useFetch from "./Hooks/useFetch";

require("dotenv").config();

const { API_KEY } = process.env;

const Test = () => {
  const [data] = useFetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.448376&lon=-112.074036&exclude=current,minutely,hourly,alerts&units=imperial&appid=${API_KEY}`);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.daily}>{item.daily.dt}</p>;
        })}
    </>
  );
};

// const Test = () => {
//     const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  
//     return (
//       <>
//         {data &&
//           data.map((item) => {
//             return <p key={item.id}>{item.title}</p>;
//           })}
//       </>
//     );
//   };

export default Test;
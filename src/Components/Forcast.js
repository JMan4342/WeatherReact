import useFetch from "../Hooks/useFetch";

require("dotenv").config();

const { REACT_APP_API_KEY } = process.env;

const Forcast = () => {
  const {data} = useFetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=phoenix&units=imperial&appid=${REACT_APP_API_KEY}`
  );
  console.log(data);
  return (
    <div>
      {data &&
        data.map((index) => {
          return <p key={index.dt}>{index.dt_txt}</p>;
        })}
    </div>
  );
};

// const Test = () => {
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };

export default Forcast;

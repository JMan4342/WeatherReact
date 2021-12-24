import React from "react";

const Conditions = (props) => {
  return (
    //    One Call Code
    //    <div>
    //        {props.data === 200 ?
    //            <div>
    //                <p><strong>{props.data}</strong></p>
    //                <p>It is currently {props.data.current.temp} degrees out with {props.data.current.weather[0].description}.</p>
    //            </div>
    //         : null
    //        }
    //    </div>
    //    Current Weather Data
    // <div>
    //   {props.data.cod === 200 ? (
    //     <div>
    //       <p>
    //         <strong>{props.data.name}</strong>
    //       </p>
    //       <p>
    //         It is currently {Math.round(props.data.main.temp)} degrees out with{" "}
    //         {props.data.weather[0].description}.
    //       </p>
    //     </div>
    //   ) : null}
    // </div>
    <div>
      {props.data &&
        props.data.daily.map((props) => {
          return <p key={props.data.dt}>{props.data.temp.day}</p>;
        })}
    </div>
  );
};

export default Conditions;

import WeekDay from "./WeekDay/WeekDay";
import WeatherImage from "./WeatherImage";
import TemperatureGroup from "./TemperatureGroup/TemperatureGroup";

const WeatherIndicator = ({ data, today }) => {
  return (
    <div className={`indicator ${today ? "today" : ""}`}>
      <WeekDay day={data.date} />
      <WeatherImage id={data.icon} />
      <TemperatureGroup min={data.min} max={data.max} />
    </div>
  );
};

export default WeatherIndicator;

import Forcast from "../Forcast/Forcast";

const WeatherContainer = ({ data }) => {
  return (
    <div className="weather-group">
      <Forcast />
    </div>
  );
};

export default WeatherContainer;

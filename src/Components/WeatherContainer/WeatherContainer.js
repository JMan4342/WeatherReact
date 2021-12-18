import Forcast from "../Forcast/Forcast";
// import SearchForm from "../SearchForm/SearchForm";

const WeatherContainer = ({ data }) => {
  return (
    <div className="weather-group">
      {/* <SearchForm /> */}
      <Forcast />
    </div>
  );
};

export default WeatherContainer;

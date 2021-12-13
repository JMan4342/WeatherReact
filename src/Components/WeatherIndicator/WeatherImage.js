const WeatherImage = ({ icon }) => {
  return (
    <div>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
    </div>
  );
};

export default WeatherImage;

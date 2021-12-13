import WeatherIndicator from "../WeatherIndicator/WeatherIndicator";

const WeatherContainer = ({ data }) => {
    return (
        <div className="weather-group">
            {data.map((dataDay, idx) => (
                <WeatherIndicator key={dataDay.date} today={idx === 0} data={dataDay} />
            ))}
        </div>
    );
};

export default WeatherContainer;
import './singlecity.scss';

const Singlecity = (prop) => {
  const weather = prop?.weatherDetails;

  if(weather.name===undefined) {
    return(
      <div className="singe-city">invalid valid city</div>
    )
  }
  // console.log(weather);
  return (
    <div className="singe-city">
      <div className="city-name">{weather.name}</div>
      <div className="weather">
        <div className="weather-desc">{weather.weather[0].description}</div>
        <div className="temprature">
          <div className="min-max">
            <div className="min">Min: {weather.main.temp_min}</div>
            <div className="max">Max: {weather.main.temp_max}</div>
          </div>
          <div className="feels-like">
            <div className="min">Feels like: {weather.main.feels_like}</div>
          </div>
        </div>
        <div className="humidity">
            <div className="min">Humidity: {weather.main.humidity}</div>
        </div>
      </div>
    </div>
  );
};

export default Singlecity;

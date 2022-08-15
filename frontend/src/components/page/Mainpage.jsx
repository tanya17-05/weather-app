import Singlecity from "../singlecity/Singlecity";
import "./mainpage.scss";

const Mainpage = (prop) => {
  const weather = prop?.weather?.data?.weather;
  if(weather===undefined) {
    return <div className="error">Search something</div>
  }
  // console.log(weather);
  return (
    <div className="main-page">
      {Object.keys(weather).map(function (key, index) {
        const cityWeather = weather[key]
        // console.log(cityWeather.name);
        // return (<div id={index}>{cityWeather.name}</div>)
        return <Singlecity id={index} weatherDetails={cityWeather} />
      })}
    </div>
  );
};

export default Mainpage;

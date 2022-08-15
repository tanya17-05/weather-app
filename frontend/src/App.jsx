import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Mainpage from "./components/page/Mainpage";
import { useState, useEffect } from "react";
import axios from 'axios';
const url = "http://localhost:1000";

// const sample = {
//   cities: ["toronto", "mumbai", "london"],
// };

const App = () => {
  const [weather, setWeather] = useState({});

  const [searchArray, setSearchArray] = useState([]);

  useEffect(() => {
    axios
      .post(`${url}/api`, {cities: searchArray})
      .then((res) => {
        setWeather(res);
      })
      .catch((err) => console.log(`error: ${err}`));
  }, [searchArray]);

  return (
    <div className="app">
      <Topbar searchArray={searchArray} setSearchArray={setSearchArray} />
      {(searchArray===[''] || searchArray===[]) ? <div className="error">Search something</div> : <Mainpage weather={weather}/>}
    </div>
  );
};

export default App;

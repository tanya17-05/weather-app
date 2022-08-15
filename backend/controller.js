const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const API_key = process.env.API_key;

exports.test = async (req, res) => {
  const cities = req.body.cities;
  if(!cities) {
    res.status(200).json({
      message: 'Please enter data to search'
    })
    return;
  }
  let weather = {};
  const promises = cities?.map(async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    const options = {
      method: "GET",
    };
    try {
      let response = await fetch(url, options);
      response = await response.json();
      // const cityWeather = response.weather[0].main;
      const cityWeather = response;
      weather[city] = cityWeather;
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: `Internal Server Error.` });
    }
  });

  await Promise?.all(promises);

  res.status(200).json({weather});
};

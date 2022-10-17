import fetch from "node-fetch";
import keys from "../sources/keys.js";

export const createWeather = (req, res, next) => {
  const { cityName } = req.body;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${keys.API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === "400") {
        res.send({ weatherText: "City is not found!" });
      } else {
        res.send(`${cityName} ${data.main.temp} C`);
      }
    })
    .catch((error) => {
      res.status(400).send(`Something went wrong! ${error.message}`);
    });
};

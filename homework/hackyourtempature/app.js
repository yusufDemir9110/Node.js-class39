import { Router } from "express";
import fetch from "node-fetch";
import keys from "./sources/keys.js";

const router = Router();

router.get("/", (req, res) => {
  res.send(`Hello from backend to frontend`);
});

router.post("/weather", (req, res, next) => {
  const { cityName } = req.body;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${keys.API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === "404") {
        res.send({ weatherText: "City is not found!" });
      } else {
        res.send(`${cityName} ${data.main.temp} C`);
      }
    })
    .catch((error) => {
      res.sendStatus(400);
      res.send(error.message);
    });
});

export default router;

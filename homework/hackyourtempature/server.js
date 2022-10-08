import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello from backend to frontend`);
});

app.post("/weather", (req, res, next) => {
  const cityName = req.body.city;
  res.send(cityName);
});

app.listen(port);

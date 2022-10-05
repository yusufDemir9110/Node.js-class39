import express from "express";
const app = express();

const port = 3000;
app.use(express.urlencoded());
app.get("/", (req, res) => {
  res.send(`
    <form action="/weather" method="POST">
        <input type="text" name="cityName" ></input>
        <input type="submit"></input>
    </form>
    `);
});
app.use(express.json());
app.post("/weather", (req, res, next) => {
  const cityName = req.body.cityName;
  res.send(cityName);
});

app.listen(port);

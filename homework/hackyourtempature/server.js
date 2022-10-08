import express from "express";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.get("/", (req, res) => {
  res.send(`
    <h3>Hello from backend to frontend</h3>
    <form action="/weather" method="POST">
        <input type="text" name="city" ></input>
        <input type="submit"></input>
    </form>
    `);
});

app.post("/weather", (req, res, next) => {
  const cityName = req.body.city;
  res.send(cityName);
});

app.listen(port);

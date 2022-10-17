import app from "./app.js";

const port = 3000;

app.get("/", (req, res) => {
  res.send(`Hello from backend to frontend`);
});

app.listen(port);

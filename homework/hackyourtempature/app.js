import express from "express";
import weatherRoutes from "./routes/weather.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/weather", weatherRoutes);

export default app;

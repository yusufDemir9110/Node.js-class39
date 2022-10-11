import express from "express";
import appPage from "./app.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", appPage);

app.listen(port);

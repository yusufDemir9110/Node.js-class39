import express from "express";

import { createWeather } from "../controllers/weather.js";

const router = express.Router();

router.post("/", createWeather);

export default router;

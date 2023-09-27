import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import sensorRoutes from "./routes/sensorRoutes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/", sensorRoutes);

app.get("/", (req, res) => {
  res.send("Cadastre os valores do sensor!");
});

export default app;

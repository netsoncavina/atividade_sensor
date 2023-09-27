import express from "express";
import Sensor from "../models/sensor.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const sensors = await Sensor.find();
  res.json(sensors);
});

router.get("/cadastrar/:item", async (req, res) => {
  const { item } = req.params;
  const sensor = new Sensor({ temperatura: item });

  try {
    const newSensor = await sensor.save();
    res.status(201).json(newSensor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;

import mongoose from "mongoose";

const sensorSchema = mongoose.Schema({
  temperatura: Number,
});

const Sensor = mongoose.model("Sensor", sensorSchema);

export default Sensor;

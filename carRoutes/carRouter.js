const express = require("express");

const router = express.Router();

const db = require("../data/dbConfig");

router.post("/", async (req, res) => {
  try {
    const carInfo = {
      VIN: req.body.VIN,
      make: req.body.make,
      model: req.body.model,
      mileage: req.body.mileage
    };
    const [id] = await db("car").insert(carInfo);
    const newCar = await db("car")
      .where("id", id)
      .first();
    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const cars = await db.select("*").from("car");
    console.log(cars);
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

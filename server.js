const express = require("express");

const server = express();

const carRoute = require("./carRoutes/carRouter");

server.use(express.json());

server.use("/cars", carRoute);

server.get("/", (req, res) => {
  res.send(`<h2>Cars are here!</h2>`);
});

module.exports = server;

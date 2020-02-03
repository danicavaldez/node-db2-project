const express = require('express');

const carsRouter = require('./routers/cars-router');

const server = express()

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>Cars Node-DB2-Project!</h1>")
});

server.use('/api/cars', carsRouter)

module.exports = server;
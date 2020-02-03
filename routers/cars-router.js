const express = require('express')

const db = require('../data/db-config')

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch(() => {
      res.status(500).json({ message: "There was an error retrieving cars information."})
    })
})

router.post('/', (req, res) => {
  const carData = req.body;

  db('cars').insert(carData)
    .then(newCar => {
      res.status(201).json(newCar)
    })
  .catch(() => {
    res.status(500).json({message: "There was an error creating the car"})
  })
});

module.exports = router;
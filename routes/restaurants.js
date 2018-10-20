const express = require('express');
const router = express.Router();
const model = require('../models/restaurants');

router.get('/:postcode', async (req, res) => {
  const restaurant = await model.getRestaurant(req.params);
  if (!restaurant) {
    return res.status(404).send('There are no restaurants in that postcode!');
  }
  res.send(restaurant);
});

router.get('/', async (req, res) => {
  const restaurants = await model.getRestaurants();
  if (!restaurants) {
    return res.status(404).send('There are no restaurants!');
  }
  res.send(restaurants);
});

router.post('/', async (req, res) => {
  const restaurant = await model.postRestaurant(req.body);
  res.send(restaurant);
});

module.exports = router;
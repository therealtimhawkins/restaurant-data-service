const express = require('express');
const router = express.Router();
const model = require('../models/restaurants');
const asyncMiddleware = require('../middleware/async');

router.get('/', asyncMiddleware(async (req, res) => {
  const restaurants = await model.getRestaurants();
  res.send(restaurants);
}));

router.get('/:postcode', asyncMiddleware(async (req, res) => {
  const restaurant = await model.getRestaurant(req.params);
  res.send(restaurant);
}));

router.post('/', asyncMiddleware(async (req, res) => {
  const restaurant = await model.postRestaurant(req.body);
  res.send(restaurant);
}));

module.exports = router;
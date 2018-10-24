const express = require('express');
const router = express.Router();
const model = require('../models/restaurants');

router.get('/', async (req, res, next) => {
  try {
    const restaurants = await model.getRestaurants();
    res.send(restaurants);
  } catch (error) {
    next(error);
  }
});

router.get('/:postcode', async (req, res) => {
  const restaurant = await model.getRestaurant(req.params);
  if (!restaurant) {
    return res.status(404).send('There are no restaurants in that postcode!');
  }
  res.send(restaurant);
});

router.post('/', async (req, res) => {
  const restaurant = await model.postRestaurant(req.body);
  res.send(restaurant);
});

module.exports = router;
const express = require('express');
const router = express.Router();
const model = require('../models/restaurants');

router.post('/', async (req, res) => {
  const restaurant = await model.postRestaurant(req.body);
  res.send(restaurant);
});

module.exports = router;
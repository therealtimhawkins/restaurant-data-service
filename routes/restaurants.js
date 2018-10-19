const express = require('express');
const router = express.Router();
const model = require('../models/restaurants');

router.get('/', (req, res) => {
  
  res.send('Hello World')
});

module.exports = router;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const restaurantsRoutes = require('./routes/restaurants');

mongoose.connect('mongodb://localhost/restaurants')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(() => console.log('Connection to MongoDB failed...'));

app.use('/api/restaurants', restaurantsRoutes);

app.listen(3000, () => {
  console.log(`Listening on port ${port}...`);
});

app.get('/', (req, res) => {
  console.log(`food-data-service is running on port ${port}...`);
  res.redirect('/api/restaurants');
});
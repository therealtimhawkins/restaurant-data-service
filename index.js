const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const restaurantsRoutes = require('./routes/restaurants');

mongoose.connect('mongodb://restaurant-data-service-user:999apple%@ds016138.mlab.com:16138/restaurant-data-service')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(() => console.log('Connection to MongoDB failed...'));

app.use(express.json());
app.use('/api/restaurants', restaurantsRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.get('/', (req, res) => {
  res.send('restaurant-data-service is running...');
});
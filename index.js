const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const restaurantsRoutes = require('./routes/restaurants');

mongoose.connect('mongodb://testuser:testuser1@ds016138.mlab.com:16138/restaurant-data-service')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(() => console.log('Connection to MongoDB failed...'));

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Origin', 'https://web-ui-service.herokuapp.com/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api/restaurants', restaurantsRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.get('/', (req, res) => {
  res.send('restaurant-data-service is running...');
});

//mongoose.connect('mongodb://localhost/restaurants')

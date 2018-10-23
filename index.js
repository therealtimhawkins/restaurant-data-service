const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('config');
const port = process.env.PORT || 3000;
const restaurantsRoutes = require('./routes/restaurants');

mongoose.connect(config.get('db'))
  .then(() => console.log('Connected to MongoDB...'))
  .catch(() => console.log('Connection to MongoDB failed...'));

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', config.get('cors-header'));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api/restaurants', restaurantsRoutes);

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.get('/', (req, res) => {
  res.send('restaurant-data-service is running...');
});

module.exports = server;

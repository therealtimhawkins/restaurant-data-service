const express = require('express');
const app = express();
const config = require('config');
const port = process.env.PORT || 3000;
const restaurantsRoutes = require('./src/routes/restaurants');

require('./src/startup/db')();

app.use(express.json());
app.use('/api/restaurants', restaurantsRoutes);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', config.get('cors-header'));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(function(err, req, res, next) {
  res.status(500).send('An error occured...');
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = server;

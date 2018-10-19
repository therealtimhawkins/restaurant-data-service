const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const restaurantsRoutes = require('./routes/restaurants');

app.use('/api/restaurants', restaurantsRoutes);

app.listen(3000, () => {
  console.log(`Listening on port ${port}...`);
});

app.get('/', (req, res) => {
  console.log(`food-data-service is running on port ${port}...`);
  res.redirect('/api/restaurants');
});
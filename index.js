const express = require('express');
const app = express();
const error = require('./src/middleware/error');
const corsMiddleware = require('./src/middleware/cors');
const restaurantsRoutes = require('./src/routes/restaurants');
const port = process.env.PORT || 4000;

require('./src/startup/db')();

app.use(corsMiddleware);
app.use(error);

app.use(express.json());
app.use('/api/restaurants', restaurantsRoutes);

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = server;

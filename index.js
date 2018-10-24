const express = require('express');
const app = express();
const error = require('./src/middleware/error');
const cors = require('./src/middleware/cors');
const restaurantsRoutes = require('./src/routes/restaurants');
const port = process.env.PORT || 3000;

require('./src/startup/db')();

app.use(express.json());
app.use('/api/restaurants', restaurantsRoutes);
app.use(cors);
app.use(error);

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = server;

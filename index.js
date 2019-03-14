const express = require('express');
const app = express();
const path = require('path');
const corsMiddleware = require('./src/middleware/cors');
const restaurantsRoutes = require('./src/routes/restaurants');
const port = process.env.PORT || 3001;

require('./src/startup/db')();

app.use(corsMiddleware);

app.use(express.json());
app.use('/api/restaurants', restaurantsRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/apiDocumentation.html'));
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = server;

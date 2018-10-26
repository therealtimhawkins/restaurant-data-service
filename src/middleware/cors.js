const config = require('config');

module.exports = function (req, res, next) {
  const corsHeader = config.get('cors-header');
  console.log(corsHeader)
  res.setHeader('Access-Control-Allow-Origin', corsHeader);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}
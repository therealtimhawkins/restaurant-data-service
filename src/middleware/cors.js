const config = require('config');

module.exports = function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', config.get('cors-header'));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}
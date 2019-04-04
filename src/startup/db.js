const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect(process.env.MongoDBUrl, { useNewUrlParser: true })
    .then(() => console.log(`Connected to ${process.env.MongoDBUrl}...`))
    .catch(() => console.log('Connection to MongoDB failed...'));
}
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    required: true,
  }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

async function getRestaurant(params) {
  return await Restaurant
    .find({postcode: params.postcode.toUpperCase()});
}

async function getRestaurants() {
  let result = await Restaurant.find();
  return result;
}

async function postRestaurant(body) {
  let restaurant = new Restaurant({
    name: body.name,
    postcode: body.postcode,
    rating: body.rating,
  })
  return await restaurant.save();
}

module.exports = {
  Restaurant,
  getRestaurant,
  getRestaurants,
  postRestaurant,
}
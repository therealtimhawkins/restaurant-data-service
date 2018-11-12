const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    require: false,
  },
  coords: {
    type: Array,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
  dishes: {
    type: Array,
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
    coords: body.coords,
    rating: body.rating,
    dishes: body.dishes,
  })
  return await restaurant.save();
}

module.exports = {
  Restaurant,
  getRestaurant,
  getRestaurants,
  postRestaurant,
}
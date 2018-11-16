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
  coords: {
    type: Array,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  dishes: {
    type: Array,
    required: true,
  }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

async function getRestaurant(params) {
  const postcode = params.postcode.toUpperCase();
  console.log(postcode);
  return await Restaurant
    .find({postcode: { "$regex": postcode.substring(0, 3), "$options": "i" }});
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
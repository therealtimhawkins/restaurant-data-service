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
    type: String,
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
  return await Restaurant
    .find({postcode: { "$regex": postcode.substring(0, 3), "$options": "i" }});
}

async function getRestaurants() {
  let result = await Restaurant.find();
  return result;
}

async function postRestaurant(body) {
  let restaurant = await Restaurant.findOne({name: body.name, postcode: body.postcode});
  if (restaurant) {
    console.log(`Updating ${restaurant.name}s infomation`);
    restaurant.coords = body.coords;
    restaurant.rating = body.rating;
    restaurant.dishes = body.dishes;
    return await restaurant.save();
  }
  console.log(`Creating new restaurant named ${body.name}`);
  restaurant = new Restaurant({
    name: body.name,
    postcode: body.postcode,
    coords: body.coords,
    rating: body.rating,
    dishes: body.dishes,
  });
  return await restaurant.save();
}

module.exports = {
  Restaurant,
  getRestaurant,
  getRestaurants,
  postRestaurant,
}
const { Router } = require('express');
const { addRestaurantEndpoint, getRestaurantsEndpoint } = require('../controllers/restaurantController');

const restaurantRouter = Router();

restaurantRouter.get('/restaurants', getRestaurantsEndpoint)
restaurantRouter.post('/restaurants', addRestaurantEndpoint)

module.exports = { restaurantRouter };
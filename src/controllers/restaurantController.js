const { addRestaurant, getRestaurants } = require('../services/restaurantService');

const getRestaurantsEndpoint = async(req, res) => {
    const allRestaurants = await getRestaurants()

    res.send({ status: "OK", data: allRestaurants })
};

const addRestaurantEndpoint = async(req, res) => {
    const { name, category, address, active } = req.body

    const newRestaurant = {
        name,
        category,
        address,
        active
    }

    const createRestaurant = await addRestaurant(newRestaurant)

    res.status(201).send({ status: "OK", order: createRestaurant })
};

module.exports = { 
    getRestaurantsEndpoint, 
    addRestaurantEndpoint 
};
const { insertQuery, selectQuery } = require('../config/configDB');

const getRestaurants = async() => {
    const allRestaurants = await selectQuery('SELECT * FROM Restaurants')

    return allRestaurants
};

const addRestaurant = async(restaurant) => {
    const createRestaurant = await insertQuery(`INSERT INTO Restaurants (name, category, address, active) VALUES ('${restaurant.name}', '${restaurant.category}', '${restaurant.address}', ${restaurant.active})`)

    return createRestaurant
};

module.exports = {
    getRestaurants,
    addRestaurant
};
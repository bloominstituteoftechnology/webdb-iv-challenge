const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
	getDishes,
	addDishes,
	getDish
};

function getDishes() {
	return db('dishes');
}

function addDishes(dish) {
	return db('dishes').insert(dish).then((ids) => ({ id: ids[0] }));
}

function getDish(id) {
	return db('dishes').where({ id: Number(id) });
}

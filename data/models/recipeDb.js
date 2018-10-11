const db = require('../dbConfig.js');

module.exports = {
	getDishes: function() {
		let query = db('dishes')
		return query;
	},
	addDish: function(dish) {
		let query = db('dishes as d')
		return query
			.insert(dish)
			.then(id => ({ id: id }));
	},
};

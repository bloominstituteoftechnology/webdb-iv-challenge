const db = require('../dbConfig.js');

module.exports = {
	getDishes: function() {
		let query = db('dishes as d')
		return query;
	},
};

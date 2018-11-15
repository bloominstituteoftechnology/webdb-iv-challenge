exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('ingredients').truncate().then(function() {
		// Inserts seed entries
		return knex('ingredients').insert([
			{ name: 'beef' },
			{ name: 'pepperoni' },
			{ name: 'cheese' },
			{ name: 'dough' },
			{ name: 'flour' },
			{ name: 'tomato' },
			{ name: 'bacon' },
			{ name: 'pineapples' },
			{ name: 'spinach' },
			{ name: 'tortillas' },
			{ name: 'onion' },
			{ name: 'cilantro' },
			{ name: 'chicken' },
			{ name: 'butter' },
			{ name: 'sugar' },
			{ name: 'chocolate' },
			{ name: 'ice cream' },
			{ name: 'baking powder' },
		])
	})
}

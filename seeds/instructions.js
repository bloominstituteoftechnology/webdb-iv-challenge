exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('instructions').truncate().then(function() {
		// Inserts seed entries
		return knex('instructions').insert([
			// meat lovers pizza
			{ recipe_id: 1, step: 'Mix the dough with the flour.' },
			{ recipe_id: 1, step: 'Make paste from the tomatoes.' },
			{ recipe_id: 1, step: 'Spread the tomato paste on the dough.' },
			{ recipe_id: 1, step: 'Put cheese on top.' },
			{ recipe_id: 1, step: 'Put pepperoni, beef, and bacon on the cheese.' },
			{ recipe_id: 1, step: 'Put it all in the oven.' },
			{ recipe_id: 1, step: 'Set oven at 400 degrees for an hour.' },
			{ recipe_id: 1, step: 'Take out of oven, let cool, then eat.' },
			// vegetar
			{ recipe_id: 2, step: 'Mix the dough with the flour.' },
			{ recipe_id: 2, step: 'Make paste from the tomatoes.' },
			{ recipe_id: 2, step: 'Spread the tomato paste on the dough.' },
			{ recipe_id: 2, step: 'Put cheese on top.' },
			{ recipe_id: 2, step: 'Put spinach on the cheese.' },
			{ recipe_id: 2, step: 'Put it all in the oven.' },
			{ recipe_id: 2, step: 'Set oven at 400 degrees for an hour.' },
			{ recipe_id: 2, step: 'Take out of oven, let cool, then eat.' },
			// hawai
			{ recipe_id: 3, step: 'Mix the dough with the flour.' },
			{ recipe_id: 3, step: 'Make paste from the tomatoes.' },
			{ recipe_id: 3, step: 'Spread the tomato paste on the dough.' },
			{ recipe_id: 3, step: 'Put cheese on top.' },
			{ recipe_id: 3, step: 'Put pineapples on the cheese.' },
			{ recipe_id: 3, step: 'Put it all in the oven.' },
			{ recipe_id: 3, step: 'Set oven at 400 degrees for an hour.' },
			{ recipe_id: 3, step: 'Take out of oven, let cool, then eat.' },
			// b
			{ recipe_id: 4, step: 'Put beef, cheese, and tomatoes in tortillas.' },
			{ recipe_id: 4, step: 'Spread cilantro and onions on top.' },
			{ recipe_id: 4, step: 'Eat.' },
			// chic
			{ recipe_id: 5, step: 'Put chicken, cheese, and tomatoes in tortillas.' },
			{ recipe_id: 5, step: 'Spread cilantro and onions on top.' },
			{ recipe_id: 5, step: 'Eat.' },
			// choco
			{ recipe_id: 6, step: 'Mix dough and flour together.' },
			{ recipe_id: 6, step: 'Add butter, sugar, and baking powder.' },
			{ recipe_id: 6, step: 'Add chocolate on top.' },
			{ recipe_id: 6, step: 'Set oven at 400 degrees for 2 hours.' },
			{ recipe_id: 6, step: 'Take out of oven, let cool, then eat.' },
			// icec
			{ recipe_id: 7, step: 'Mix dough and flour together.' },
			{ recipe_id: 7, step: 'Add baking powder.' },
			{ recipe_id: 7, step: 'Set oven at 400 degrees for 2 hours.' },
			{ recipe_id: 7, step: 'Take out of oven, let cool, then eat.' },
			{ recipe_id: 7, step: 'Add ice cream on top.' },
			{ recipe_id: 7, step: 'Eat.' },
		])
	})
}

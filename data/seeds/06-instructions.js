exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('instructions').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('instructions').insert([
				// meat lovers pizza
				{ recipe_id: 1, step_no: 1, step: 'Mix the dough with the flour.' },
				{ recipe_id: 1, step_no: 2, step: 'Make paste from the tomatoes.' },
				{ recipe_id: 1, step_no: 3, step: 'Spread the tomato paste on the dough.' },
				{ recipe_id: 1, step_no: 4, step: 'Put cheese on top.' },
				{ recipe_id: 1, step_no: 5, step: 'Put pepperoni, beef, and bacon on the cheese.' },
				{ recipe_id: 1, step_no: 6, step: 'Put it all in the oven.' },
				{ recipe_id: 1, step_no: 7, step: 'Set oven at 400 degrees for an hour.' },
				{ recipe_id: 1, step_no: 8, step: 'Take out of oven, let cool, then eat.' },
				// vegetarian pizza
				{ recipe_id: 2, step_no: 1, step: 'Mix the dough with the flour.' },
				{ recipe_id: 2, step_no: 2, step: 'Make paste from the tomatoes.' },
				{ recipe_id: 2, step_no: 3, step: 'Spread the tomato paste on the dough.' },
				{ recipe_id: 2, step_no: 4, step: 'Put cheese on top.' },
				{ recipe_id: 2, step_no: 5, step: 'Put spinach on the cheese.' },
				{ recipe_id: 2, step_no: 6, step: 'Put it all in the oven.' },
				{ recipe_id: 2, step_no: 7, step: 'Set oven at 400 degrees for an hour.' },
				{ recipe_id: 2, step_no: 8, step: 'Take out of oven, let cool, then eat.' },
				// hawaiian pizza
				{ recipe_id: 3, step_no: 1, step: 'Mix the dough with the flour.' },
				{ recipe_id: 3, step_no: 2, step: 'Make paste from the tomatoes.' },
				{ recipe_id: 3, step_no: 3, step: 'Spread the tomato paste on the dough.' },
				{ recipe_id: 3, step_no: 4, step: 'Put cheese on top.' },
				{ recipe_id: 3, step_no: 5, step: 'Put pineapples on the cheese.' },
				{ recipe_id: 3, step_no: 6, step: 'Put it all in the oven.' },
				{ recipe_id: 3, step_no: 7, step: 'Set oven at 400 degrees for an hour.' },
				{ recipe_id: 3, step_no: 8, step: 'Take out of oven, let cool, then eat.' },
				// beef tacos
				{ recipe_id: 4, step_no: 1, step: 'Put beef, cheese, and tomatoes in tortillas.' },
				{ recipe_id: 4, step_no: 2, step: 'Spread cilantro and onions on top.' },
				{ recipe_id: 4, step_no: 3, step: 'Eat.' },
				// chicken tacos
				{ recipe_id: 5, step_no: 1, step: 'Put chicken, cheese, and tomatoes in tortillas.' },
				{ recipe_id: 5, step_no: 2, step: 'Spread cilantro and onions on top.' },
				{ recipe_id: 5, step_no: 3, step: 'Eat.' },
				// chocolate cake
				{ recipe_id: 6, step_no: 1, step: 'Mix dough and flour together.' },
				{ recipe_id: 6, step_no: 2, step: 'Add butter, sugar, and baking powder.' },
				{ recipe_id: 6, step_no: 3, step: 'Add chocolate on top.' },
				{ recipe_id: 6, step_no: 4, step: 'Set oven at 400 degrees for 2 hours.' },
				{ recipe_id: 6, step_no: 5, step: 'Take out of oven, let cool, then eat.' },
				// icecream cake
				{ recipe_id: 7, step_no: 1, step: 'Mix dough and flour together.' },
				{ recipe_id: 7, step_no: 2, step: 'Add baking powder.' },
				{ recipe_id: 7, step_no: 3, step: 'Set oven at 400 degrees for 2 hours.' },
				{ recipe_id: 7, step_no: 4, step: 'Take out of oven, let cool, then eat.' },
				{ recipe_id: 7, step_no: 5, step: 'Add ice cream on top.' },
				{ recipe_id: 7, step_no: 6, step: 'Eat.' },
			]);
		});
};

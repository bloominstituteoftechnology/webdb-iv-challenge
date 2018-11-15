exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
  return knex('dishes_recipes').del()
    .then(function() {
      // Inserts seed entries
      return knex('dishes_recipes').insert([
        { dish_id: 1, recipe_id: 1 },
        { dish_id: 1, recipe_id: 2 },
        { dish_id: 1, recipe_id: 3 },
        { dish_id: 2, recipe_id: 4 },
        { dish_id: 2, recipe_id: 5 },
        { dish_id: 3, recipe_id: 6 },
        { dish_id: 3, recipe_id: 7 },
      ])
	})
}
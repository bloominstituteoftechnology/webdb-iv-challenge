
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'Pizza Crust', qty: 1, recipe_id: 1},
        {ingredient: 'Tomato Sauce', qty: 1, recipe_id: 1},
        {ingredient: 'Mozzarella ', qty: 1, recipe_id: 1},
        {ingredient: 'Pepperoni', qty: 1, recipe_id: 1},
        {ingredient: 'Italian Sausage', qty: 1, recipe_id: 1},
        {ingredient: 'Bacon', qty: 1, recipe_id: 1},
        {ingredient: 'Pizza Crust', qty: 1, recipe_id: 2},
        {ingredient: 'Alfredo Sauce', qty: 1, recipe_id: 2},
        {ingredient: 'Mozzarella', qty: 1, recipe_id: 2},
        {ingredient: 'Cheddar', qty: 1, recipe_id: 2},
        {ingredient: 'Taco Shells', qty: 1, recipe_id: 3},
        {ingredient: 'Ground Beef', qty: 1, recipe_id: 3},
        {ingredient: 'Cheddar', qty: 1, recipe_id: 3},
        {ingredient: 'Lettuce', qty: 1, recipe_id: 3},
        {ingredient: 'Tomatos', qty: 1, recipe_id: 3},
        {ingredient: 'Mild Salsa', qty: 1, recipe_id: 3},
        {ingredient: 'Corn Tortillas', qty: 1, recipe_id: 4},
        {ingredient: 'Al Pastor Beef', qty: 1, recipe_id: 4},
        {ingredient: 'Lime', qty: 1, recipe_id: 4},
        {ingredient: 'Onion', qty: 1, recipe_id: 4},
        {ingredient: 'Cilantro', qty: 1, recipe_id: 4},
        {ingredient: 'Tomatillo Salsa', qty: 1, recipe_id: 4},
        {ingredient: 'Chipotle Salsa', qty: 1, recipe_id: 4}
      ]);
    });
};

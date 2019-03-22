
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Pizza Crust', qty: 1, recipe_id: 1},
        {name: 'Tomato Sauce', qty: 1, recipe_id: 1},
        {name: 'Mozzarella ', qty: 1, recipe_id: 1},
        {name: 'Pepperoni', qty: 1, recipe_id: 1},
        {name: 'Italian Sausage', qty: 1, recipe_id: 1},
        {name: 'Bacon', qty: 1, recipe_id: 1},
        {name: 'Pizza Crust', qty: 1, recipe_id: 2},
        {name: 'Alfredo Sauce', qty: 1, recipe_id: 2},
        {name: 'Mozzarella', qty: 1, recipe_id: 2},
        {name: 'Cheddar', qty: 1, recipe_id: 2},
        {name: 'Taco Shells', qty: 1, recipe_id: 3},
        {name: 'Ground Beef', qty: 1, recipe_id: 3},
        {name: 'Cheddar', qty: 1, recipe_id: 3},
        {name: 'Lettuce', qty: 1, recipe_id: 3},
        {name: 'Tomatos', qty: 1, recipe_id: 3},
        {name: 'Mild Salsa', qty: 1, recipe_id: 3},
        {name: 'Corn Tortillas', qty: 1, recipe_id: 4},
        {name: 'Al Pastor Beef', qty: 1, recipe_id: 4},
        {name: 'Lime', qty: 1, recipe_id: 4},
        {name: 'Onion', qty: 1, recipe_id: 4},
        {name: 'Cilantro', qty: 1, recipe_id: 4},
        {name: 'Tomatillo Salsa', qty: 1, recipe_id: 4},
        {name: 'Chipotle Salsa', qty: 1, recipe_id: 4}
      ]);
    });
};

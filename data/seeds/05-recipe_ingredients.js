exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { recipe_id: '1', ingredient_id: '1', quantity: '1 pound' },
        { recipe_id: '1', ingredient_id: '2', quantity: '1 packet' },
        { recipe_id: '1', ingredient_id: '3', quantity: '6' },
        { recipe_id: '1', ingredient_id: '4', quantity: '1 cup chopped' },
        { recipe_id: '1', ingredient_id: '5', quantity: '1/2 cup' },
        { recipe_id: '2', ingredient_id: '6', quantity: '1 pound' },
        { recipe_id: '2', ingredient_id: '7', quantity: '10 oz' },
        { recipe_id: '2', ingredient_id: '8', quantity: '2 cups cooked' },
        { recipe_id: '3', ingredient_id: '9', quantity: '1/2 pound' },
        { recipe_id: '3', ingredient_id: '1', quantity: '1/2 pound' },
        { recipe_id: '3', ingredient_id: '10', quantity: '6' }
      ]);
    });
};

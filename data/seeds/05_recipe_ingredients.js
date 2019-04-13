
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { quantity: '1', recipe_id: '1', ingredient_id: '1' },
        { quantity: '1', recipe_id: '2', ingredient_id: '2' },
        { quantity: '1', recipe_id: '2', ingredient_id: '3' },
        { quantity: '1', recipe_id: '2', ingredient_id: '4' },
        { quantity: '1tbps', recipe_id: '2', ingredient_id: '5' },
        { quantity: '12oz', recipe_id: '3', ingredient_id: '6' },
        { quantity: '12oz', recipe_id: '4', ingredient_id: '7' },
        { quantity: '3cups', recipe_id: '3', ingredient_id: '8' },
        { quantity: '3cups', recipe_id: '4', ingredient_id: '9' },
        { quantity: '5oz', recipe_id: '3', ingredient_id: '10' },
        { quantity: '5oz', recipe_id: '4', ingredient_id: '11' },
        { quantity: 'As much as you like', recipe_id: '3', ingredient_id: '12' },
        { quantity: 'As much as you like', recipe_id: '4', ingredient_id: '13' },
        { quantity: 'As much as you like', recipe_id: '4', ingredient_id: '14' }
      ]);
    });
};

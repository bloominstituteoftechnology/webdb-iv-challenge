exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients')
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        { recipes_id: 1, ingredients_id: 1 },
        { recipes_id: 1, ingredients_id: 2 }, 
        { recipes_id: 2, ingredients_id: 3 },
        { recipes_id: 2, ingredients_id: 1 }, 
        { recipes_id: 3, ingredients_id: 2 },
        { recipes_id: 3, ingredients_id: 3 },
      ]);
    });
};

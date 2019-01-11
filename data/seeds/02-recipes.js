
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'chicken tacos', dish_id: 1},
        {id: 2, recipe_name: 'beef tacos', dish_id: 1},
        {id: 3, recipe_name: 'fish tacos', dish_id: 1},
        {id: 4, recipe_name: 'pepperoni pizza', dish_id: 7},
        {id: 5, recipe_name: 'bbq chicken pizza', dish_id: 7},
        {id: 6, recipe_name: 'hawaiian pizza', dish_id: 7},
        {id: 7, recipe_name: 'veggy pizza', dish_id: 7},
      ]);
    });
};

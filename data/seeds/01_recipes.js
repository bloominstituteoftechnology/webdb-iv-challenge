
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, dish_id: 1, recipe_name: 'Spaghetti (Bake)'},
        {id: 2, dish_id: 2, recipe_name: 'Bacon Jalapeno Mac And Cheese'},
        {id: 3, dish_id: 3, recipe_name: 'Pub Burger'}
      ]);
    });
};

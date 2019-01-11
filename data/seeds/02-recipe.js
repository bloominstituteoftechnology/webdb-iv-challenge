
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        { recipe_name: 'chocolate chip cookies', dish_id: 1 },
        { recipe_name: 'coconut oatmeal chocolate chip cookies', dish_id: 1 },
        { recipe_name: 'ciabatta', dish_id: 2 },
        { recipe_name: 'french', dish_id: 2 }
      ]);
    });
};

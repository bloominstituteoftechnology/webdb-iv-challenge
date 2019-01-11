
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Hawaian Pizza', dish_id: 2 },
        { recipe_name: 'Thai Green Curry', dish_id: 1 },
        { recipe_name: 'Pinnaple Upside Down', dish_id: 3 },
      ]);
    });
};


exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe: 'Lobo tacos', dish_id: 1 },
        { recipe: 'Lou pizza', dish_id: 2 },
        { recipe: 'Family pasta', dish_id: 3 }
      ]);
    });
};
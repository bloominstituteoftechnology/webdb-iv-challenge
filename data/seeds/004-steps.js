
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step: 'cook chicken', sequence: 1, recipe_id: 1, ingredient_id: 1 },
        { step: 'cook pizza', sequence: 1, recipe_id: 2, ingredient_id: 4 },
        { step: 'cook pasta', sequence: 1, recipe_id: 3, ingredient_id: 5 },
      ]);
    });
};

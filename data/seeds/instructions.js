
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, step: 'roll out dough', recipe_id: 1},
        {id: 2, step: 'add sauce', recipe_id: 1},
        {id: 3, step: 'add cheese', recipe_id: 1},

        {id: 4, step: 'get bread', recipe_id: 2},
        {id: 5, step: 'add peanut butter', recipe_id: 2},
        {id: 6, step: 'add jelly', recipe_id: 2},

        {id: 7, step: 'get pasta', recipe_id: 3},
        {id: 8, step: 'boil pasta', recipe_id: 3},
        {id: 9, step: 'add meat', recipe_id: 3},
        {id: 10, step: 'add cheese', recipe_id: 3},
      ]);
    });
};

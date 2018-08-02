
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'Meat', recipe_id: 1 },
        { name: 'Chicken', recipe_id: 1 },
        { name: 'Shell', recipe_id: 1 }
      ]);
    });
};

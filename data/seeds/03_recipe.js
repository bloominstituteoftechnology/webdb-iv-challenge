
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, recipe: "Burrito", dish_id: 1 },
        {id: 2, recipe: "Pizza", dish_id: 2 }
      ]);
    });
};

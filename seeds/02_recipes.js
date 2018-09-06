
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Potato Soup', dishId: 1},
        {recipe_name: 'Clam Chowder', dishId: 1},
        {recipe_name: 'Veggie Pizza', dishId: 2},
        {recipe_name: 'Fudge Brownies', dishId: 3}
      ]);
    });
};

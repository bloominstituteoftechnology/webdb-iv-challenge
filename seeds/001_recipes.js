
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'flatBread', dish_id: 1, instructions: 'spin dat dough'},
        {name: 'southwest salmon', dish_id: 2},
        {name: 'canadian steak', dish_id: 3},
        {name: 'italiano spices', dish_id: 2},
        {name: 'parmasean', dish_id: 5},
      ]);
    });
};

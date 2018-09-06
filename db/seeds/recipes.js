
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Granny Tacos', dish_id: '1', ingredient_1: '1', quantity_1: '2', ingredient_2: '4', quantity_2: '1' },
        {name: 'Granny Pizza', dish_id: '2', ingredient_1: '1', quantity_1: '2', ingredient_2: '3', quantity_2: '2' },
      ]);
    });
};
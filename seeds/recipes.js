
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'meat lovers', dish_id: 1},
        {id: 2, name: 'veggie', dish_id: 1},
        {id: 3, name: 'mediterranean', dish_id: 1},
        {id: 4, name: 'classic foot long', dish_id: 2},
        {id: 5, name: 'veggie', dish_id: 2},
        {id: 6, name: 'bacon blue cheese', dish_id: 3},
        {id: 7, name: 'cheese burger', dish_id: 3}
      ]);
    });
};

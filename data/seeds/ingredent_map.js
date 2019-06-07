
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient_map').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_map').insert([
        {id: 1, recipie_id: 1, ingredient_id: 1, quantity: Math.random()*10},
        {id: 2, recipie_id: 1, ingredient_id: 4, quantity: Math.random()*10},
        {id: 3, recipie_id: 1, ingredient_id: 5, quantity: Math.random()*10},
        {id: 4, recipie_id: 1, ingredient_id: 6, quantity: Math.random()*10},
        {id: 5, recipie_id: 1, ingredient_id: 8, quantity: Math.random()*10},
        {id: 6, recipie_id: 1, ingredient_id: 10, quantity: Math.random()*10},
        {id: 7, recipie_id: 2, ingredient_id: 2, quantity: Math.random()*10},
        {id: 8, recipie_id: 2, ingredient_id: 3, quantity: Math.random()*10},
        {id: 9, recipie_id: 2, ingredient_id: 5, quantity: Math.random()*10},
        {id: 10, recipie_id: 2, ingredient_id: 6, quantity: Math.random()*10},
        {id: 11, recipie_id: 2, ingredient_id: 7, quantity: Math.random()*10},
        {id: 12, recipie_id: 2, ingredient_id: 9, quantity: Math.random()*10}
      ]);
    });
};

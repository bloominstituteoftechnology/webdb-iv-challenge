exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'pepperoni pizza', dish_id: 1},
        {name: 'phillysteak pizza', dish_id: 1},
        {name: 'chicken taco', dish_id: 2},
        {name: 'steak taco', dish_id: 2},
        {name: 'tofu rice bowl', dish_id: 3},
        {name: 'steak rice bowl', dish_id: 3},
      ]);
    });
};
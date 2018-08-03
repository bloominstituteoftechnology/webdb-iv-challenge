exports.seed = function(knex, Promise) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        { id: 1, name: 'omelette', dish_id: 1 },
        { id: 2, name: 'smoothie', dish_id: 1 },
        { id: 3, name: 'burger', dish_id: 2 },
        { id: 4, name: 'fries', dish_id: 2 },
        { id: 5, name: 'steak', dish_id: 3 },
        { id: 6, name: 'mashed potatoes', dish_id: 3 },
      ]);
    });
};

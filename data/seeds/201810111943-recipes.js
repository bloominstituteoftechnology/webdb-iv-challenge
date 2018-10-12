exports.seed = function(knex, Promise) {
  return knex('recipes').truncate()
    .then(() => {
      return knex('recipes').insert([
        {name: 'Waffles', dish_id: 1},
        {name: 'Bowl of Cereal', dish_id: 1},
        {name: 'Cheese and Crackers', dish_id: 5},
        {name: 'Kale Pesto Pasta', dish_id: 3},
        {name: 'Tomato Soup', dish_id: 6}
      ]);
    });
};

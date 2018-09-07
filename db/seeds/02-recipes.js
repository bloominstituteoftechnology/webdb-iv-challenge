
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Cajun Burger', dish_id: 1},
        {name: 'Cheddar Burger', dish_id: 1},
        {name: 'Baked Spaghetti', dish_id: 2},
        {name: 'Supremo Spaghetti', dish_id: 2},
        {name: 'Pepperoni Pizza', dish_id: 3},
        {name: 'White Pizza', dish_id: 3},
        {name: 'Soup Dumplings', dish_id: 4},
        {name: 'Pork Dumplings', dish_id: 4}
      ]);
    });
};

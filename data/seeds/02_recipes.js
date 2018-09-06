
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Deep Dish', dish_id: 1}, //1
        {name: 'Pizza(New York)', dish_id: 1}, //2
        {name: 'Detroit-style Pizza', dish_id: 1}, //3
        {name: 'Fish Taco', dish_id: 2}, //4
        {name: 'Can\'t Believe It\'s not tacos!', dish_id: 2}, //5
        {name: 'Done making up names', dish_id: 2}, //6
        {name: 'Pasta 1', dish_id: 3}, //7
        {name: 'Pasta 2', dish_id: 3}, //8
        {name: 'Pasta 3', dish_id: 3}, //9
      ]);
    });
};

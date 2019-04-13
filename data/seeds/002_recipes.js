
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: "bbq chicken pizza", dish_id: 1 },
        { name: "Spicy Chicken", dish_id: 2 },
        { name: "bacon Cheeseburger Pasta", dish_id: 3 }
      ]);
    });
};

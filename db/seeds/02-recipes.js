
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Jack Fruit taco", dish_id: 1 },
        { name: "veggi pizza", dish_id: 2 },
        { name: "bean soup", dish_id: 3 }
      ]);
    });
};

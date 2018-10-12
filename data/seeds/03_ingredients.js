
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Ingrediants').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingrediants').insert([
        { Ingrediants: 'cheese', recipe_id: 1 , dish_id: 1 },
        { Ingrediants: 'cheese', recipe_id: 1 , dish_id: 2 },
        { Ingrediants: 'pepperoni', recipe_id: 1 , dish_id: 1},
        { Ingrediants: 'milk', recipe_id: 2 , dish_id: 2},
        { Ingrediants: 'salt', recipe_id: 2, dish_id: 2 },
        { Ingrediants: 'apples', recipe_id: 3 , dish_id: 3},
        { Ingrediants: 'bananas', recipe_id: 3 , dish_id: 3},
      ]);
    });
};

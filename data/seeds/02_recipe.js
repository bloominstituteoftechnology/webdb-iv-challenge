
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        { Recipe: " Cheese Pizza ", dish_id: 1 },
        { Recipe: " Pepperoni Pizza ", dish_id: 1 },
        { Recipe: " Cheese Tacos ", dish_id: 3 },
        { Recipe: " Pepperoni Tacos ", dish_id: 4 },
        { Recipe: " Cheese Ice Cream ", dish_id: 5 },
        { Recipe: " pepperoni Ice Cream ", dish_id: 6 }
      ]);
    });
};

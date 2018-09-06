
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: "potatoes, salt", dish_id: 16},
        {ingredient: "lettuce, tomatoes, cheese, onion, dressing", dish_id: 17},
        {ingredient: "salmon, butter, garlic", dish_id: 18}
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { item: 'Item 1', measurement: 'cup' , amount: 2.2, recipe_id: 1 }, // 1
        { item: 'Item 2', measurement: 'tablespoon' , amount: 2.2, recipe_id: 1 }, // 2
        { item: 'Item 3', measurement: 'pinch' , amount: 2.2, recipe_id: 2 }, // 3
        { item: 'Item 4', measurement: 'teaspoon' , amount: 2.2, recipe_id: 2 }, // 4
      ]);
    });
};

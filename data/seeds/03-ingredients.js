exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredientName: 'Tomato Sauce', Qty: 2},
        {ingredientName: 'Butter', Qty: 1},
        {ingredientName: 'Onion', Qty: 1},
        {ingredientName: 'Cheese', Qty: 3},
        {ingredientName: 'Milk', Qty: 1},
        {ingredientName: 'Bell Pepper', Qty: 1},
        {ingredientName: 'Garlic', Qty: 1}
      ]);
    });
};
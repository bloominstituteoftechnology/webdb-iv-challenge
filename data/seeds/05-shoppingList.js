exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoppingList').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('shoppingList').insert([
        {ingredientName: 'Tomato Sauce', ingredientQty: 2, dish_id: 1},
        {ingredientName: 'Butter', ingredientQty: 1, dish_id: 2},
        {ingredientName: 'Onion', ingredientQty: 1, dish_id: 3},
        {ingredientName: 'Cheese', ingredientQty: 3, dish_id: 2},
        {ingredientName: 'Milk', ingredientQty: 1, dish_id: 1},
        {ingredientName: 'Bell Pepper', ingredientQty: 1, dish_id: 3},
        {ingredientName: 'Garlic', ingredientQty: 1, dish_id: 4}
      ]);
    });
};
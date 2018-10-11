
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {IngredientName: 'cheese'},
        {IngredientName: 'pepperoni'},
        {IngredientName: 'mushroom'},
        {IngredientName: 'taco_shells'},
        {IngredientName: 'ground_beef'},
        {IngredientName: 'lettuce'},
        {IngredientName: 'tomato'},
        {IngredientName: 'tortillas'},
        {IngredientName: 'ham'},
      ]);
    });
};

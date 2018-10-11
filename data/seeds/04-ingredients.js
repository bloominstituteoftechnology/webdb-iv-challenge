
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredientName: 'cheese'},
        {ingredientName: 'pepperoni'},
        {ingredientName: 'mushroom'},
        {ingredientName: 'taco_shells'},
        {ingredientName: 'ground_beef'},
        {ingredientName: 'lettuce'},
        {ingredientName: 'tomato'},
        {ingredientName: 'tortillas'},
        {ingredientName: 'ham'},
      ]);
    });
};

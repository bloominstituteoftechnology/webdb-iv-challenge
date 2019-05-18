
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {Ingredient: 'Lettuce'},
        {Ingredient: 'Tomato'},
        {Ingredient: 'Egg'},
        {Ingredient: 'Flour'},
        {Ingredient: 'Chicken Breast'},
        {Ingredient: 'Some kind of seasoning'},
        {Ingredient: 'Some kind of spice'},
        {Ingredient: 'Apple'},
        {Ingredient: 'Beef'},
        {Ingredient: 'Potato'},
      ]);
    });
};

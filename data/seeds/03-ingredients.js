
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'water'},
        {ingredient_name: 'flour'},
        {ingredient_name: 'yeast'},
        {ingredient_name: 'beef'},
        {ingredient_name: 'chicken'},
        {ingredient_name: 'totrila'},
        {ingredient_name: 'salt'},
        {ingredient_name: 'pepper'},
        {ingredient_name: 'butter'},
        {ingredient_name: 'bun'},
        {ingredient_name: 'lettuce'},
        {ingredient_name: 'tomato'},
        {ingredient_name: 'mayo'},
        {ingredient_name: 'pepperoni'},
        {ingredient_name: 'cheese'},
        {ingredient_name: 'tomato sauce'},
        {ingredient_name: 'onion'},
      ]);
    });
};

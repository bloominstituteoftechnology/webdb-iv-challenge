
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredients_name: 'egg noodles'},
        {ingredients_name: 'soba noodles'},
        {ingredients_name: 'egg'},
        {ingredients_name: 'seaweed'},
        {ingredients_name: 'soy sauce'},
        {ingredients_name: 'seasoning that goes on everything magically'},
        {ingredients_name: 'brown rice'},
        {ingredients_name: 'white rice'},
        {ingredients_name: 'tomato'},
        {ingredients_name: 'green onion'},
        {ingredients_name: 'olives'},
        {ingredients_name: 'cilantro'},
        {ingredients_name: 'teriyaki sauce'},
        {ingredients_name: 'olive oil'},
        {ingredients_name: 'spinach'},
        {ingredients_name: 'avocado'},
        {ingredients_name: 'blue cheese dressing'},
        {ingredients_name: 'basalmic dressing'},
        {ingredients_name: 'romaine'},
        {ingredients_name: 'chicken'},
      ]);
    });
};

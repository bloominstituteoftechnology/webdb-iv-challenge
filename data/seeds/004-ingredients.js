
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Tomato Paste', quantity: '3', measurement: 'Cups'}, // spaghetti
        {ingredient_name: 'Noodles', quantity: '5', measurement: 'Bundles'}, // spaghetti
        {ingredient_name: 'Rice', quantity: '3', measurement: 'Cups'}, // soup
        {ingredient_name: 'Eggs', quantity: '2', measurement: 'lb'}, // egg salad
        {ingredient_name: 'Celery', quantity: '1', measurement: 'lb'}, // egg salad
        {ingredient_name: 'Pickles', quantity: '1', measurement: 'lb'}, // dynamic
        {ingredient_name: 'Garlic', quantity: '5', measurement: 'g'}, // dynamic
        {ingredient_name: 'Hamburger', quantity: '3', measurement: 'lb'}, // spaghetti
      ]);
    });
};

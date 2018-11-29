
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Tomato Paste'}, // spaghetti
        {ingredient_name: 'Noodles'}, // spaghetti
        {ingredient_name: 'Rice'}, // soup
        {ingredient_name: 'Eggs'}, // egg salad
        {ingredient_name: 'Celery'}, // egg salad
        {ingredient_name: 'Pickles'}, // dynamic
        {ingredient_name: 'Garlic'}, // dynamic
        {ingredient_name: 'Hamburger'}, // spaghetti
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {dish_name: 'Pizza'},
        {dish_name: 'Spaghetti'},
        {dish_name: 'Fried Chicken'},
        {dish_name: 'Pudim'},
        {dish_name: 'Sugar Cookies'},
        {dish_name: 'Meatloaf'},
        {dish_name: 'Hamburger'},
        {dish_name: 'Tacos'},
        {dish_name: 'Mashed Potatoes'}
      ]);
    });
};

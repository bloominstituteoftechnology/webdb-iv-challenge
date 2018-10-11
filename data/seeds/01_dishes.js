
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {dish_name: 'Cookie Cake'},
        {dish_name: 'French Toast'},
        {dish_name: 'Banana Cake'},
        {dish_name: 'Chocolate Peanut Butter Cake'},
        {dish_name: 'Pizza'}
      ]);
    });
};

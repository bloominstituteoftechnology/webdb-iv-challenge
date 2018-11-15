exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipies')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipies').insert([
        { name: 'Spicy Chicken Noodle', dish_id: 1 }
      ]);
    });
};

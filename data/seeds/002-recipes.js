exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Real Burger', dish_id: '1' },
        { name: 'Old Burger', dish_id: '1' },
        { name: 'King Milk', dish_id: '3' },
      ]);
    });
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'sugar', dish_id: 1 },
        { name: 'milk', dish_id: 1 },
        { name: 'strawberry', dish_id: 1 }
      ]);
    });
};

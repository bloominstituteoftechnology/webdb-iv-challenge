
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Seafood Gumbo', dish_id: 1},
        {name: 'Chicken and Sausage Gumbo', dish_id: 1},
        {name: 'Shrimp Jambalaya', dish_id: 2}
      ]);
    });
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Tex-mex tacos', dish_id: '1' },
        { recipe_name: 'Chicken Alfredo', dish_id: '2' },
        { recipe_name: 'Bison Burger', dish_id: '3' }
      ]);
    });
};

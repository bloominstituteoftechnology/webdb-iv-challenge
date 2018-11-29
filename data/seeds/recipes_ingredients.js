exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name')
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { recipe_id: 1, ingredients_id: 1 },
        { recipe_id: 1, ingredients_id: 2 }, 
        { recipe_id: 2, ingredients_id: 3 },
        { recipe_id: 2, ingredients_id: 1 }, 
        { recipe_id: 3, ingredients_id: 2 },
        { recipe_id: 3, ingredients_id: 3 },
      ]);
    });
};

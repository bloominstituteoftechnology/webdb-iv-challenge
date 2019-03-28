
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'cheese', amount:'1.0', recipe_id:2},
        { ingredient_name: 'bread', amount:'2.0', recipe_id:2},
        { ingredient_name: 'ham', amount:'1.0', recipe_id:2},
        { ingredient_name: 'frosted flakes', amount:'2.0', recipe_id:1},
        { ingredient_name: 'milk', amount:'3.0', recipe_id:1},
      ]);
    });
};

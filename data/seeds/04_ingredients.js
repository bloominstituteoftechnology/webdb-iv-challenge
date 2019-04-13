
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'patty', recipe_id: '1' },
        { ingredient_name: 'patty', recipe_id: '2' },
        { ingredient_name: 'buns', recipe_id: '1' },
        { ingredient_name: 'buns', recipe_id: '2' },
        { ingredient_name: 'slice of cheese', recipe_id: '2' },
        { ingredient_name: 'ketchup', recipe_id: '2' },
        { ingredient_name: 'dough', recipe_id: '3' },
        { ingredient_name: 'dough', recipe_id: '4' },
        { ingredient_name: 'marinara', recipe_id: '3' },
        { ingredient_name: 'marinara', recipe_id: '4' },
        { ingredient_name: 'grated cheese', recipe_id: '3' },
        { ingredient_name: 'grated cheese', recipe_id: '4' },
        { ingredient_name: 'pepperoni', recipe_id: '3' },
        { ingredient_name: 'pineapple', recipe_id: '4' },
        { ingredient_name: 'ham', recipe_id: '4' }
      ]);
    });
};

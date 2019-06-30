
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('RecipesIngredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('RecipesIngredients').insert([
        { recipe_id: '1', ingredients_id: '1', quantity: '20',  unit: 'gr'},
        { recipe_id: '2', ingredients_id: '1', quantity: '35',  unit: 'gr'},
        { recipe_id: '2', ingredients_id: '2', quantity: '200',  unit: 'ml'},
        { recipe_id: '3', ingredients_id: '2', quantity: '300',  unit: 'ml'},
        { recipe_id: '1', ingredients_id: '3', quantity: '12',  unit: 'oz'},
        { recipe_id: '2', ingredients_id: '3', quantity: '24',  unit: 'oz'},
        { recipe_id: '3', ingredients_id: '3', quantity: '16',  unit: 'oz'},
      ]);
    });
};

const db = require('knex')(require('../../knexfile').development);

module.exports = {
  getDishes() {
    return db('dishes');
  },

  addDish(dish) {
    return db('dishes').insert(dish);
  },

  getDish(id) {
    return db('dishes')
      .select({
        dish_name: 'dishes.name',
        recipe_name: 'recipes.name',
      })
      .join('recipes', 'recipes.dish_id', 'dishes.id')
      .where('dishes.id', id);
  },

  getRecipes() {
    return db('recipes');
  },

  addRecipe(recipe) {
    return db('recipes').insert(recipe);
  },

  getRecipe(id) {
    const query_1 = db('recipes')
      .select({
        recipe_name: 'recipes.name',
        dish_name: 'dishes.name',
      })
      .join('dishes', 'dishes.id', 'recipes.dish_id')
      .where('recipes.id', id);

    const query_2 = db('instructions')
      .select('step', 'description')
      .join('recipes', 'recipes.id', 'instructions.recipe_id')
      .where('recipes.id', id);

    const query_3 = db('ingredients')
      .select({
        name: 'ingredients.name',
        quantity: 'recipe_ingredients.quantity',
        unit_of_measure: 'recipe_ingredients.unit_of_measure',
      })
      .join(
        'recipe_ingredients',
        'recipe_ingredients.ingredient_id',
        'ingredients.id',
      )
      .join('recipes', 'recipes.id', 'recipe_ingredients.recipe_id')
      .where('recipes.id', id);

    return Promise.all([query_1, query_2, query_3]).then(
      ([result1, result2, result3]) => {
        result1[0].instructions = result2;
        result1[0].ingredients = result3;
        return result1[0];
      },
    );
  },
};

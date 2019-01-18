const db = require('../dbConfig.js');

module.exports = {
  getRecipes: function() {
    return db('recipes as r')
      .leftJoin('dishes as d', 'd.id', 'r.dish_id')
      .select('r.id', 'r.name', 'd.name as dish');
  },

  addRecipe: function(recipe) {
    return db('recipes').insert(recipe);
  },

  getRecipe: function(id) {
    let recipe = this.getRecipes()
      .where('r.id', id)
      .first();

    let ingredients = db('recipe_ingredients as ri')
      .join('ingredients as i', 'i.id', 'ri.ingredient_id')
      .where('ri.recipe_id', id)
      .select('i.name', db.raw("ri.amount || ' ' || i.measurement AS amount"));

    let instructions = db('recipe_instructions as ris')
      .join('recipes as r', 'r.id', 'ris.recipe_id')
      .where('r.id', id)
      .select('ris.step', 'ris.description');

    const promises = [recipe, ingredients, instructions];

    return Promise.all(promises).then(results => {
      let [recipe, ingredients, instructions] = results;

      recipe.ingredients = ingredients;
      recipe.instructions = instructions;

      return recipe;
    });
  },
  getRecipeIngredients: function(id) {},
};

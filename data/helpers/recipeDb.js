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
    // .join('recipe_ingredients as ri', 'ri.recipe_id', 'r.id')
    // .select('r.id', 'r.name', 'ri.amount', 'ri.ingredient_id');
    let ingredients = db('recipe_ingredients as ri')
      .join('ingredients as i', 'i.id', 'ri.ingredient_id')
      .where('ri.recipe_id', id)
      .select('i.name', db.raw('ri.amount || i.measurement AS amount'));
    const promises = [recipe, ingredients];

    return Promise.all(promises).then(results => {
      let [recipe, ingredients] = results;
      // console.log('recipe', recipe, 'ingredients', ingredients);
      recipe.ingredients = ingredients.map(ingredient => ingredient);
      console.log(recipe);
      return recipe;
    });
  },
};

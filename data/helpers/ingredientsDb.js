const db = require('../dbConfig.js');

module.exports = {
  //gets ingredients and recipes that use them
  getIngredients: function() {
    let ingredients = db('ingredients');
    let recipes = db('recipe_ingredients as ri')
      .join('recipes as r', 'r.id', 'ri.recipe_id')
      .select('r.name', 'ri.ingredient_id', 'ri.amount')
      .orderBy('ri.ingredient_id', 'asc');

    const promises = [ingredients, recipes];

    return Promise.all(promises).then(results => {
      let [ingredients, recipes] = results;
      ingredients = ingredients.map(ingredient => ({
        ...ingredient,
        recipes: recipes.reduce((acc, recipe) => {
          if (recipe.ingredient_id === ingredient.id) {
            acc.push({
              name: recipe.name,
              count: `${recipe.amount} ${ingredient.measurement}`,
            });
          }
          return acc;
        }, []),
      }));
      console.log(ingredients);
      return ingredients;
    });
  },
};

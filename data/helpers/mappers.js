module.exports = {
  dishToBody,
  recipeToBody
};

function dishToBody(dish) {
  const result = { ...dish };

  if (dish.recipes) {
    result.recipes = dish.recipes.map(recipe => ({
      ...recipe
    }));
  }

  return result;
}

function recipeToBody(recipe) {
  const result = { ...recipe };

  if (recipe.ingredients) {
    result.ingredients = recipe.ingredients.map(ingredient => ({
      ...ingredient
    }));
  }

  return result;
}

// function tagToBody(tag) {
//   return { ...tag };
// }

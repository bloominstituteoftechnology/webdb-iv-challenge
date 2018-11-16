const db = require('../')

module.exports = {
  getRecipes (req, res, next) {
    const id = req.params.id

    if (id) {
      // recipe & dish  name
      const recipe_dish = db('recipes')
        .join('dishes', 'recipes.dish_id', 'dishes.id')
        .select('recipes.recipe_name', 'dishes.dish_name')
        .where('recipes.id', req.params.id)
        .first()
        .then((recipe) => recipe)
        .catch(next)

      // ingredient name & quantity
      const ingredient_quantity = db('recipe_ingredients')
        .join(
          'ingredients',
          'recipe_ingredients.ingredient_id',
          'ingredients.id'
        )
        .select('quantity', 'ingredient_name')
        .where('recipe_id', req.params.id)
        .then((recipe) => recipe)
        .catch(next)

      // instructions
      const instructions = db('instructions')
        .select('step', 'description')
        .where('recipe_id', req.params.id)
        .then((recipe) => recipe)
        .catch(next)

      return Promise.all([ recipe_dish, ingredient_quantity, instructions ])
        .then((values) => res.status(200).json(values))
        .catch(next)
    }
    return db('recipes')
      .then((recipes) => res.status(200).json(recipes))
      .catch(next)
  },

  addRecipe (req, res, next) {
    if (!req.body || !req.body.dish_id || !req.body.recipe_name) {
      return next(Error('recipe'))
    }
    const recipe = req.body
    return db('recipes')
      .insert(recipe)
      .then((id) => res.status(201).json(id))
      .catch(next)
  }
}

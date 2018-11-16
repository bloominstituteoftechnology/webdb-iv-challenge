const db = require('../')

module.exports = {
  getRecipes (req, res) {
    const id = req.params.id

    if (id) {
      // recipe & dish  name
      const recipe_dish = db('recipes')
        .join('dishes', 'recipes.dish_id', 'dishes.id')
        .select('recipes.recipe_name', 'dishes.dish_name')
        .where('recipes.id', req.params.id)
        .first()
        .then((recipe) => recipe)

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

      // instructions
      const instructions = db('instructions')
        .select('step', 'description')
        .where('recipe_id', req.params.id)
        .then((recipe) => recipe)

      Promise.all([
        recipe_dish,
        ingredient_quantity,
        instructions
      ]).then((values) => res.status(200).json(values))
    }
    return db('recipes').then((recipes) => res.status(200).json(recipes))
  },

  addRecipe (req, res) {
    const recipe = req.body
    db('recipes').insert(recipe).then((id) => res.status(201).json(id))
  }
}

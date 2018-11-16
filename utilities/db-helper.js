const db = require('../data/db')

module.exports = {
  getDishes: () => {
    return db('dishes')
  },

  getDish: id => {
    return db('dishes as d')
      .select('d.name as dish', 'r.name as recipe')
      .join('recipes as r', 'r.dish_id', 'd.id')
      .where('d.id', id)
  },

  addDish: dish => {
    return db('dishes').insert(dish)
  },

  getRecipes: () => {
    return db('recipes as r')
      .select('r.id', 'd.name as dish', 'r.name as recipe')
      .join('dishes as d', 'd.id', 'r.dish_id')
  },

  getRecipe: id => {
    const query01 = db('recipes as r')
      .select('d.name as dish', 'r.name as recipe', 's.step', 's.description')
      .join('dishes as d', 'd.id', 'r.dish_id')
      .join('steps as s', 's.recipe_id', 'r.id')
      .where('r.id', id)

    const query02 = db('recipes as r')
      .select(
        'i.name as ingredient',
        'ri.quantity as quantity',
        'ri.unit as unit'
      )
      .join('dishes as d', 'd.id', 'r.dish_id')
      .join('recipes_ingredients as ri', 'ri.recipe_id', 'r.id')
      .join('ingredients as i', 'i.id', 'ri.ingredient_id')
      .where('r.id', id)

    return Promise.all([query01, query02])
  },
  addRecipe: recipe => {
    return db('recipes').insert(recipe)
  }
}

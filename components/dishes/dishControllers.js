const db = require('../')

module.exports = {
  getAllDishes (req, res, next) {
    let query = db('dishes')
    const id = req.params.id
    if (id) {
      return query
        .select('dishes.dish_name', 'recipes.recipe_name')
        .join('recipes', 'dishes.id', 'recipes.dish_id')
        .where('dishes.id', id)
        .then((dish) => res.status(200).json(dish))
        .catch(next)
    }
    return query.then((dishes) => res.status(200).json(dishes)).catch(next)
  },
  addDish (req, res, next) {
    if (!req.body || !req.body.dish_name) {
      return next(new Error('dish'))
    }
    const dish = req.body
    return db('dishes')
      .insert(dish)
      .then((id) => res.status(201).json(id))
      .catch(next)
  }
}

const db = require('../')

module.exports = {
  getAllDishes (req, res) {
    let query = db('dishes')
    const id = req.params.id
    if (id) {
      return query
        .select('dishes.dish_name', 'recipes.recipe_name')
        .join('recipes', 'dishes.id', 'recipes.dish_id')
        .where('dishes.id', id)
        .then((dish) => res.status(200).json(dish))
    }
    return query.then((dishes) => res.status(200).json(dishes))
  },
  addDish (req, res) {
    const dish = req.body
    db('dishes').insert(dish).then((id) => res.status(201).json(id))
  }
}

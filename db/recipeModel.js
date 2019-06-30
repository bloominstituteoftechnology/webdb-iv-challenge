const db = require('./knexConfig');

module.exports = {
  get,
  getById,
  addDish,
  getRecipes,
  addRecipe,
  allRecipes,
  getIngredients,
  addIngredients
};

function getRecipes(id) {
  return db('dishes')
    .join('recipes', 'dishes.id', '=', 'recipes.dish_id')
    .where({ 'dishes.id': id })
    .reduce(
      (item, row) => {
        console.log(row, 'row');
        console.log(item, 'item');
        item.name = row.name;
        item.ingredients.push(row.ingredients);
        return item;
      },
      { name: '', ingredients: [] }
    );
}

function get() {
  return db('dishes');
}

function getById(id) {
  return db('dishes').where({ id: id });
}

function addDish(dish) {
  return db('dishes').insert(dish);
}

function addRecipe(recipe) {
  return db('recipes').insert(recipe);
}

function allRecipes() {
  return db('recipes');
}

function getIngredients(id) {
  if (id) {
    return db('ingredients').where({ id: id });
  } else {
    return db('ingredients');
  }
}

function addIngredients(ing) {
  return db('ingredients').insert(ing);
}

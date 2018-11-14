const db = require('./knexConfig');

module.exports = {
  get,
  getById,
  addDish,
  getRecipes,
  addRecipe,
  allRecipes
};

function getRecipes() {
  return db('dishes')
    .join('recipes', 'dishes.id', '=', 'recipes.dish_id')
    .reduce(
      (item, row) => {
        console.log(row, 'row');
        console.log(item, 'item');
        item.name = row.name;
        item.ingredients.push(row.ingredients);
        return item;
      },
      { ingredients: [], name: '' }
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

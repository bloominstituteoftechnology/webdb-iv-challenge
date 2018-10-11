module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipies,
  addRecipe,
};

function getDishes() {
  return db('dishes');
}

function addDish(dish) {
  return db('dishes')
    .insert(dish)
    .into('dishes');
}

function getDish(id) {
  return db('dishes')
    .where({ id })
    .first();
}

function getRecipies() {
  return db('recipies');
}

function addRecipe(recipe) {
  return db('recipies')
    .insert(recipe)
    .into('recipies');
}

// repository pattern for data access
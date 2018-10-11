module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipies,
  addRecipe,
};

function getDishes() {
  return db('Dishes');
}

function addDish(dish) {
  return db('Dishes')
    .insert(dish)
    .into('Dishes');
}

function getDish(id) {
  return db('Dishes')
    .where({ id })
    .first();
}

function getRecipies() {
  return db('Recipies');
}

function addRecipe(recipe) {
  return db('Recipies')
    .insert(recipe)
    .into('Recipies');
}

// repository pattern for data access
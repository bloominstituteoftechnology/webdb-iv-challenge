const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
}

function getDishes() {
  return db('dishes');
}

function addDish(dish) {
  return db('dishes').insert(dish);
}

function getDish(id) {
  return db('dishes').where({ id: Number(id) }).first();
}

function getRecipes(dish_name) {
  return db('recipes as r')
    .join('dishes as d', 'd.id', 'r.dish_id')
    .select('r.id as recipeId', 'r.name as recipe', 'd.name as dish')
    .where('d.name', dish_name);
}

function addRecipe(recipe) {
  return db('recipes').insert(recipe);
}

// test cases
getDishes().then(dishes => console.log(dishes));
// => [ { id: 1, name: 'Sinigang' },
// { id: 2, name: 'Adobo' },
// { id: 3, name: 'Bulalo' },
// { id: 4, name: 'Asado' } ]

getDish(1).then(dish => console.log(dish));
// => { id: 1, name: 'Sinigang' }

getDish(2).then(dish => console.log(dish));
// => { id: 2, name: 'Adobo' }

getDish(3).then(dish => console.log(dish));
// => { id: 3, name: 'Bulalo' }

getDish(4).then(dish => console.log(dish));
// => { id: 4, name: 'Asado' }

addDish({ name: 'Asado' }).then(res => console.log(res));
// => [4]

getRecipes('Sinigang').then(recipes => console.log(recipes));
// => [ { recipeId: 1, recipe: 'Sinigang ni Cheng', dish: 'Sinigang' },
//  { recipeId: 2, recipe: 'Sinigang ni Marita', dish: 'Sinigang' } ]

getRecipes('Adobo').then(recipes => console.log(recipes));
// => [ { recipeId: 3, recipe: 'Adobo ni Romy', dish: 'Adobo' },
//   { recipeId: 4, recipe: 'Adobo ni Danny', dish: 'Adobo' } ]

getRecipes('Bulalo').then(recipes => console.log(recipes));
// => [ { recipeId: 5, recipe: 'Bulalo ni Edna', dish: 'Bulalo' },
//   { recipeId: 6, recipe: 'Bulalo ni Betty', dish: 'Bulalo' } ]

addRecipe({ name: 'Asado ni Mang Kepweng', dish_id: 4 }).then(res => console.log(res));
// [7]

getRecipes('Asado').then(recipes => console.log(recipes));
// => [ { recipeId: 7, recipe: 'Asado ni Mang Kepweng', dish: 'Asado' } ]

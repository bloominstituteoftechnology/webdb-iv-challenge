const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const getDishes =()=>{
    return db("dish");
}

const getRecipes =()=>{
  return db("recipe");
}

const getDish = (id) =>{
  if(id) {
    return db('dish')
        .where({id})
        .first();
  } else {
      return db('dish');
  }
}

// ****getShoppingList method not working properly
// comment-out sections are causing problems
// when un-comment, somehow all the id's suddently shows up, but unit.name does not.  Please help!
const getShoppingList = (recipeId) =>{
  if(recipeId) {
    return db('recipe')
        .join('recipe-ingredient','recipe.id','=','recipe-ingredient.recipe_id')
        .join('ingredient', 'recipe-ingredient.ingredient_id', '=', 'ingredient.id')
        // join('ingredient-unit','recipe-ingredient.ingredient_id', '=', 'ingredient-unit.ingredient_id')
        // join('unit', 'ingredient-unit.unit_id', '=', 'unit.id')
        .where('recipe.id', recipeId)
        .select('ingredient.name',
        'ingredient.amount'
        //'unit.name'
        );
  } else {
      return db('dish');
  }
}

const addDish = (dish) =>{
    return db
          .insert(dish)
          .into('dish');
}

const addRecipe = (recipe) =>{
  return db.insert(recipe)
            .into('recipe');
}

module.exports = {
  getDishes,
  getDish,
  addDish,
  getRecipes,
  addRecipe,
  getShoppingList
};
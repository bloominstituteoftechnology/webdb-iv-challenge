

/*== Database Accessor =========================================================

    getDishes(): should return a list of all dishes in the database.
    addDish(dish): should add the dish to the database and return the id of the new dish.
    getDish(id): should return the dish with the provided id and include a list of the related recipes.
    getRecipes(): should return a list of all recipes in the database including the dish they belong to.
    addRecipe(recipe): should add a recipe to the database and return the id of the new recipe.

*/

//-- Dependencies --------------------------------
const knex       = require('knex'           );
const knexConfig = require('./knexfile.js'  );
const config     = require('./config.js');
const crudHelper = require('./crud-helper'  );

//-- Create Crud Helpers -------------------------
const knexDB = knex(knexConfig.development);
const dishCrud   = crudHelper(knexDB, config.TABLE_DISHES );
const recipeCrud = crudHelper(knexDB, config.TABLE_RECIPES);

//-- Create and Export Database Accessor ---------
module.exports = {
    getDishes (      ){ return dishCrud.get  (      );},
    getDish   (id    ){ return dishCrud.get  (id    );},
    addDish   (dish  ){ return dishCrud.add  (dish  );},
    getRecipes(      ){ return recipeCrud.get(      );},
    addRecipe (recipe){ return recipeCrud.add(recipe);},
};

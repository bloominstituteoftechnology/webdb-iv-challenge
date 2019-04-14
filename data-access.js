

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

//-- Configure Knex Database ---------------------
const knexDB = knex(knexConfig.development);

//-- Create and Export Database Accessor ---------
module.exports = {
    dishes      : crudHelper(knexDB, config.TABLE_DISHES      ),
    recipes     : crudHelper(knexDB, config.TABLE_RECIPES     ),
    ingredients : crudHelper(knexDB, config.TABLE_INGREDIENTS ),
    requirements: crudHelper(knexDB, config.TABLE_REQUIREMENTS),
    instructions: crudHelper(knexDB, config.TABLE_INSTRUCTIONS),
    //
    getDishes (      ){ return this.dishes.get (      );},
    getDish   (id    ){ return this.dishes.get (id    );},
    addDish   (dish  ){ return this.dishes.add (dish  );},
    getRecipes(      ){ return this.recipes.get(      );},
    addRecipe (recipe){ return this.recipes.add(recipe);},
};

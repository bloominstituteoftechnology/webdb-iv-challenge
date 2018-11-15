

/*== Create Tables: Dishes, Recipes, Ingredients, Requirements, Instructions ===

have a way to manage dishes. A dish is something the client wants to cook like pizza or tacos.
have a way to manage recipes. A dish can have different recipes for tacos, like tex-mex or granny's. A recipe belongs only to one dish.
have a way to manage ingredients.
a recipe could have more than one ingredient and the same ingredient can be used in multiple recipes. Examples are "cup of corn flour" or "gram of butter".
when saving the ingredients for a recipe capture the quantity required for that ingredient as a floating number.
have a way to save instructions for cooking a recipe. Instructions will be a series of steps involved in cooking a recipe.
for some recipes, the order in which the steps are performed matters, please provide a way to specify that order.
have a way to pick a dish and a recipe and get a shopping list with all the ingredients, and quantity of each, needed to cook the dish.
*/

//-- Dependencies --------------------------------
const config = require('../../config.js');

//-- Migrations ----------------------------------
exports.up = function(knex, Promise) {
    return Promise.all([
        // Table Dishes
        knex.schema.createTable(config.TABLE_DISHES, table => {
            table.increments(config.FIELD_ID).primary();
            table.string(config.FIELD_NAME).notNullable();
        }),
        // Table Recipes
        knex.schema.createTable(config.TABLE_RECIPES, table => {
            table.increments(config.FIELD_ID).primary();
            table.string(config.FIELD_NAME).notNullable();
            table.integer(config.FIELD_DISH_ID).notNullable();
            table.foreign(config.FIELD_DISH_ID)
                .references(`${config.TABLE_DISHES}.${config.FIELD_ID}`);
        }),
        // Table Ingredients
        knex.schema.createTable(config.TABLE_Ingredients, table => {
            table.increments(config.FIELD_ID).primary();
            table.string(config.FIELD_NAME).notNullable();
        }),
        // Table Requirements
        knex.schema.createTable(config.TABLE_REQUIREMENTS, table => {
            table.integer(config.FIELD_RECIPE_ID).notNullable();
            table.foreign(config.FIELD_RECIPE_ID)
                .references(`${config.TABLE_RECIPES}.${config.FIELD_ID}`);
            table.integer(config.FIELD_INGREDIENT_ID).notNullable();
            table.foreign(config.FIELD_INGREDIENT_ID)
                .references(`${config.TABLE_INGREDIENTS}.${config.FIELD_ID}`);
            table.float(config.FIELD_AMOUNT).notNullable();
        }),
        // Table Instructions
        knex.schema.createTable(config.TABLE_INSTRUCTIONS, table => {
            table.integer(config.FIELD_RECIPE_ID).notNullable();
            table.foreign(config.FIELD_RECIPE_ID)
                .references(`${config.TABLE_RECIPES}.${config.FIELD_ID}`);
            table.string(config.FIELD_DESCRIPTION).notNullable();
            table.integer(config.FIELD_ORDER).notNullable();
        }),
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable(config.TABLE_DISHES      ),
        knex.schema.dropTable(config.TABLE_RECIPES     ),
        knex.schema.dropTable(config.TABLE_INGREDIENTS ),
        knex.schema.dropTable(config.TABLE_REQUIREMENTS),
        knex.schema.dropTable(config.TABLE_INSTRUCTIONS),
    ]);
};

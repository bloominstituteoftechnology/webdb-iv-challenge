exports.up = function(knex, Promise) {
       return knex.schema.createTable('shoppingList_table', function(tbl) {

        tbl.increments(); 

        tbl
        .integer('recipeIngredient_id')
        .unsigned()
        .references('id')
        .inTable('recipeIngredients_table');
        
         });
        };

    exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('shoppingList_table');
    };
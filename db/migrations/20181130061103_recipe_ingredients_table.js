exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipeIngredients_table', function(tbl) {

      tbl.increments(); 

      tbl.string('ingredient_type', 288)
            .unique('ingredient_type');
    
      tbl.real('quantity')
        
      tbl.string('quantity_unit', 58)

      tbl
      .integer('recipe_id')
       .unsigned()
       .references('id')
       .inTable('recipes');
    
       tbl
       .integer('ingredient_id')
       .unsigned()
       .references('id')
       .inTable('ingredients_table');
    
        });
       };
    
    exports.down = function(knex, Promise) {
       return knex.schema.dropTableIfExists('recipeIngredients_table');
    };
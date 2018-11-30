exports.up = function(knex, Promise) {
    // RECIPES create table function - holds list of recipes for a specific dish
   return knex.schema.createTable('recipes_table', function(tbl) {
       // make changes to the table using the tbl object passed as a parameter
     
       // primary key
       tbl.increments(); 
        // other fields
       tbl.string('name', 255)
          .unique('name');
       
       //foreign id
       tbl
       .integer('dish_id')
       .unsigned()
       .references('id')
       .inTable('dishes');
     });
    }

exports.down = function(knex, Promise) {
    // undo the changes to the database (it's called rolling back changes)
    return knex.schema.dropTableIfExists('recipes_table');
    };
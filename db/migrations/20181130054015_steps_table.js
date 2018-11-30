exports.up = function(knex, Promise) {

    return knex.schema.createTable('steps_table', function(tbl) {
 
        tbl.increments(); // primary key
        
        tbl.string('step', 388)
           .unique('step');
         tbl.integer('sequence number')
           .unique('sequence number');
        
       
        tbl  //foreign key
        .integer('recipeIngredient_id')
        .unsigned()
        .references('id')
        .inTable('recipeIngredients');
        
         });
       }

        exports.down = function(knex, Promise) {
          return knex.schema.dropTableIfExists('steps_table');
        };
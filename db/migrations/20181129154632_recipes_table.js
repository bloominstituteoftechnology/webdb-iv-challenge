exports.up = function(knex, Promise) {
   return knex.schema.createTable('recipes_table', function(tbl) {
    
       tbl.increments(); // primary key
        
       tbl.string('name', 255) // other fields
          .unique('name');
       
      
       tbl  //foreign ikey
       .integer('dish_id')
       .unsigned()
       .references('id')
       .inTable('dishes_table');
     });

    }

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes_table');
    };
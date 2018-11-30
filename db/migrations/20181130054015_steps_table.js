exports.up = function(knex, Promise) {
 
    return knex.schema.createTable('steps_table', function(tbl) {

        tbl.increments(); 
        
        tbl.string('step', 388)
           .unique('step');
    
        tbl.integer('sequence_number')
           .unique('sequence_number');
        
        tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes');
        
         });
       }
    
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps_table');
};
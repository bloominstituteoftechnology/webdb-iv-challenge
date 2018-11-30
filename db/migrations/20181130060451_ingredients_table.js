exports.up = function(knex, Promise) {

    return knex.schema.createTable('ingredients_table', function(tbl) {

       tbl.increments(); 

       tbl.string('type', 288)
          .unique('type');
        });
       };
        
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients_table');
    };


exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments(); 
        tbl
          .string('name')
          .notNullable()
          .unique('recipe'); 
        tbl
          .integer('dishID')
          .references('id')
          .inTable('dishes');
    }); 
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipes'); 
  };
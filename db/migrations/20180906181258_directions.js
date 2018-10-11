
exports.up = function(knex, Promise) {
    return knex.schema.createTable('directions', function(tbl){
        tbl.increments();
        tbl
            .integer('step_number')
        tbl
            .string('step')
            .notNullable()        
        tbl 
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('dishes')
  };
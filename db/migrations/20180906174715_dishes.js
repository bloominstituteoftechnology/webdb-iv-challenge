exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', tbl => {
        tbl.increments(); 
        tbl
          .string('name')
          .notNullable()
          .unique('dish'); 
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dishes'); 
  };

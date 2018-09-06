exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', tbl => {
        tbl.increments(); 
        tbl
          .string('name')
          .notNullable()
          .uniqute('dish'); 
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dishes'); 
  };

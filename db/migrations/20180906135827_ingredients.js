
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {
        tbl.increments();
        tbl
          .string('ingredient')
          .notNullable()
          .unique('ingredient');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ingredients');
  };
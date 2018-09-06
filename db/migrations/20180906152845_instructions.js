
exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', function(tbl) {
      tbl.increments();
      tbl
        .string('instruction')
        .notNullable()
        .unique('instruction');
    });
  };
    
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('instructions');
  };

exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', tbl => {
        tbl.increments();
        tbl.string('action', 256);
        tbl.integer('step');
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('steps')
  };
  
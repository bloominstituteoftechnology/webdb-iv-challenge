
exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', function(tbl) {
        tbl.increments('id');
        tbl.string('name', 256)
           .notNullable()
        tbl.blob('ingredients');
    });
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instructions');
  };
  

exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {
        tbl.increments('id');
        tbl.string('name', 256)
           .notNullable()
           .unique();
    });
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
  };
  
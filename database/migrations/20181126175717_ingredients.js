
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tbl) {
    tbl.increments('ingredient_id');
    
    tbl
      .string('name', 128)
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};

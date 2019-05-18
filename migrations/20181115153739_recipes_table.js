
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
    tbl.increments();
    tbl
        .string('name', 200)
        .notNullable()
        .unique('recipe-name')
    tbl
        .integer()
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes')
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tbl) {
      tbl.increments();

      tbl.string('name').notNullable();

      tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};

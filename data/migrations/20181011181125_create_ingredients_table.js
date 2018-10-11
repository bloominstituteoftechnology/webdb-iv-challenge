
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tb) {
    tb.increments();
    tb.string('name').notNullable().unique('ingredient_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};

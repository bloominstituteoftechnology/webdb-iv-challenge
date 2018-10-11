
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(t) {
      t.increments();
      t.string('name', 128).notNullable().unique('ingredient_name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};

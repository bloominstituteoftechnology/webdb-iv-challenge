
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Ingredients', function(tbl) {
    tbl.increments();
    tbl.string('ingredientName', 255).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Ingredients')
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', table => {
    table.increments();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};

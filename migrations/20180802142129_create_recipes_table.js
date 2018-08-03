
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(recipes) {
	recipes.increments();
   recipes
    .string('name')

   recipes.text('text').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};


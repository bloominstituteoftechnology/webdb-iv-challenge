
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredient', table => {
    table.increments();
    table.integer('recipe_id').unsigned().notNullable();
    table.foreign('recipe_id').references('id').inTable('recipe');
    table.float('amount');
    table.string('measurement');
    table.integer('ingredient_id').unsigned().notNullable();
    table.foreign('ingredient_id').references('id').inTable('ingredient');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredient');
};

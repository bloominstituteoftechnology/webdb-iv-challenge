
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', table => {
    table.increments();
    table.string('amount').notNullable();
    table.integer('recipes_id').unsigned().notNullable();
    table.foreign('recipes_id').references('id').on('recipes');
    table.integer('ingredient_id').unsigned().notNullable();
    table.foreign('ingredient_id').references('id').on('ingredients');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};

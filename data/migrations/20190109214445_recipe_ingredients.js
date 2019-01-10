
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', table => {
    table.increments();
    table.float('quantity').notNullable();

    table.integer('recipe_id').unsigned();
    table.foreign('recipe_id').references('id').on('recipes');

    table.integer('ingredient_id').unsigned();
    table.foreign('ingredient_id').references('id').on('ingredients');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};

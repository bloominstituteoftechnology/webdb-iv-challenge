

exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_instructions', table => {
    table.increments();
    table.integer('quantity').unsigned();
    table.integer('recipe_id').unsigned();
    table.foreign('recipe_id').references('id').on('recipes');
    table.integer('ingredients_id').unsigned();
    table.foreign('ingredients_id').references('id').on('ingredients');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_instructions');
};

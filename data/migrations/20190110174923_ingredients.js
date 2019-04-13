
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
      table.increments();
      table.string('ingredient').notNullable();
      table.decimal('ingredient_amount').notNullable();
      table.integer('recipe_ID').unsigned();
      table.foreign('recipe_ID').references('id').on('recipes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
      table.increments();
      table.string('ingredientName').notNullable();
      ///recipe Id
      table.integer('recipeId').unsigned();
      table.foreign('recipeId').references('id').on('recipes');
      ///measurement
      table.string('measurement');
      ///amounts
      table.float('amount').unsigned().notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};

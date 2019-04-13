
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
    table.increments();
    table.string('name').notNullable();
    table.float('quantity').notNullable();
    table.string('measurement');
    table.integer('recipe_id').unsigned();
    table.foreign('recipe_id').references('id').on('recipes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};

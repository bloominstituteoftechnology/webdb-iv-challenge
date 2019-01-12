

exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', table => {
    table.increments();
    table.string('name').notNullable();
    table.integer('recipe_id').unsigned();
    table.foreign('recipe_id').references('id').on('recipes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};

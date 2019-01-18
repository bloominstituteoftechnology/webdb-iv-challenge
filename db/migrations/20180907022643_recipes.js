exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(table) {
    table.increments();

    table.string('name', 128).notNullable();

    table
      .integer('dish_id')
      .unsigned()
      .references('dishes.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table => {
    table.increments();
    table.string('name').notNullable();
    table.text('description');
    table.integer('dish_id').unsigned().notNullable();
    table.foreign('dish_id').references('id').on('dishes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};

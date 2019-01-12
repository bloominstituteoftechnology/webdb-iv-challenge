
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function (table) {
          table.increments();
          table.string('name').notNullable();
          table.integer('dish_id').unsigned();
          table.foreign('dish_id').references('id').on('dishes');
        });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};

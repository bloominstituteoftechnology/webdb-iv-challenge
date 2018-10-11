
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tb) {
    tb.increments();
    tb.string('name', 256).notNullable().unique('dish_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};

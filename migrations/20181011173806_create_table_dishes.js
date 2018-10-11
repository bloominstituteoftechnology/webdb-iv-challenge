
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', (t) => {
    t.increments();
    t.string('dish_name', 33).notNullable();
    t.unique('dish_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};

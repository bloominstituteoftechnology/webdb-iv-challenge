
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', (table) => {
      table.increments('id');

      table
            .string('dish_name', 128)
            .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};

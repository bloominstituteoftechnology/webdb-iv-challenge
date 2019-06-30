
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(table) {
      table.increments();
      table.string('name', 255)
        .notNullable();
      table.unique('name');
      table.integer('dish_id')
        .unsigned()
        .references('id')
        .inTable('dishes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('recipes');
};

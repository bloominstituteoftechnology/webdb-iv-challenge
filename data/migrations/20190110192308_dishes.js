
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', table => {
      table.increments();
      table.string('Dish_Name').notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes')
};

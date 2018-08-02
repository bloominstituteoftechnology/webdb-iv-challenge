exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('recipes', function(table) {
      table
        .increments();
      table
        .string('name')
        .notNullable()
        .unique();
      table
        .integer('dishId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes');
      table
        .timestamp('created_at')
        .defaultTo(knex.fn.now());
    }).catch(error => {
      console.log(error);
      reject(error);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
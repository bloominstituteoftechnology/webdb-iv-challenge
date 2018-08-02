exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('steps', function(table) {
      table
        .increments();
      table
        .string('text')
        .notNullable()
      table
        .integer('recipeId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
      table
        .integer('order')
        .unsigned()
        .notNullable()
      table
        .timestamp('created_at')
        .defaultTo(knex.fn.now());
    }).catch(error => {
      console.log(error);
      reject(error);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('steps');
};
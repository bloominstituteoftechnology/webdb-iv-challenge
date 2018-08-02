exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('recipeingredients', function(table) {
      table
        .increments();
      table
        .string('amount')
        .notNullable();
      table
        .integer('dishId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes');
      table
        .integer('recipeId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
      table
        .timestamp('created_at')
        .defaultTo(knex.fn.now());
    }).catch(error => {
      console.log(error);
      reject(error);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipeingredients');
};
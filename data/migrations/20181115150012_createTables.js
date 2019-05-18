
exports.up = function (knex, Promise) {
  return knex.schema.createTable('dishes', function (table) {
    table.increments();
    table.string('name', 128).notNullable();
  })
    .createTable('recipes', function (table) {
      table.increments();
      table.string('name', 128).notNullable();
      table
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes');
    })
    .createTable('ingredients', function (table) {
      table.increments();
      table.float('quantity');
      table.string('name').notNullable();
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
    })
    .createTable('steps', function (table) {
      table.increments();
      table.integer('step_num');
      table.string('description').notNullable();
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
    })
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists('students')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps');
};

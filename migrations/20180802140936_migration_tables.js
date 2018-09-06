
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(table) {
      table.increments();
      table.string('dish').notNullable().unique();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
  .createTable('recipes', function(table) {
    table.increments();
    table.string('recipe_name').notNullable().unique();
    table.integer('dishId').references('id').inTable('dishes')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
.createTable('ingredients', function(table) {
    table.increments();
    table.string('ingredient').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
.createTable('instructions', function(table) {
    table.increments();
    table.text('step');
    table.integer('recipeId').references('id').inTable('recipes')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
.createTable('measurements', function(table) {
    table.increments();
    table.string('unit').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
.createTable('ingredientList', function(table) {
    table.increments();
    table.integer('ingredientId').references('id').inTable('ingredients')
    table.integer('recipeId').references('id').inTable('recipes')
    table.boolean('add_to_list').defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
.createTable('shoppingList', function(table) {
    table.increments();
    table.integer('ingredientId').references('id').inTable('ingredients')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
.createTable('quantities', function(table) {
    table.increments();
    table.decimal('amount', 1, 2).notNullable();
    table.integer('ingredientId').references('id').inTable('ingredients')
    table.integer('measurementId').references('id').inTable('measurements')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes')
  .dropTable('recipes')
  .dropTable('ingredients')
  .dropTable('instructions')
  .dropTable('measurements')
  .dropTable('ingredientList')
  .dropTable('shoppingList')
  .dropTable('quantities')

};

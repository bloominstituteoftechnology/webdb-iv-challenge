
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes_ingredients', function(table){
      table.increments();
      table.integer('recipe_id').notNullable().references('id').inTable('recipes');
      table.integer('ingredient_id').notNullable().references('id').inTable('ingredients');
      table.integer('amount').notNullable();
      table.string('unit').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes_ingredients');
};

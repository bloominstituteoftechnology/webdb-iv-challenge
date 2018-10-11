
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients_recipes_bridge', function(tb) {
    tb.increments();
    tb.integer('recipe_id').notNullable().unsigned().references('id').inTable('recipes');
    tb.integer('ingredient_id').notNullable().unsigned().references('id').inTable('ingredients');
    tb.integer('unit_id').notNullable().unsigned().references('id').inTable('units');
    tb.integer('quanity').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients_recipes_bridge');
};

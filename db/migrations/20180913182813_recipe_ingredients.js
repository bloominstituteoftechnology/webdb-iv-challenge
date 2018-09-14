
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', function(t){
    t.increments();
    t
    .integer('recipe_id')
    .notNullable()
    .references('id')
    .inTable('recipes');
    t
    .integer('ingredient_id')
    .notNullable()
    .references('id')
    .inTable('ingredients');
    t
    .float('amount')
    .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe_ingredients')
};

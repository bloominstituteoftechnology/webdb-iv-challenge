
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tb) {
    tb.increments();
    tb.string('name', 256).notNullable().unique('recipe_name');
    tb.integer('dish_id').unsigned().references('id').inTable('dishes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};

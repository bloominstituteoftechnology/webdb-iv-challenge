
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', (t) => {
    t.increments();
    t.string('recipe_name', 33).notNullable();
    t.integer('recipe_id').unsigned();
    t.foreign('recipe_id').references('dishes.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};

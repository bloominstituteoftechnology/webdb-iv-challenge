
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', function(tb) {
    tb.increments();
    tb.integer('recipe_id').unsigned().references('id').inTable('recipes');
    tb.integer('sequence').notNullable();
    tb.string('step').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};

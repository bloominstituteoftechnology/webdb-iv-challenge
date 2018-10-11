
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', function(t){
      t.increments();

      t.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes');

      t.integer('step_number')
      .unsigned()
      .notNullable();

      t.string('step_instruction')
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};

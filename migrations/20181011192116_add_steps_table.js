
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', function(table){
      table.increments();
      table.integer('recipe_id').notNullable().references('id').inTable('recipes');
      table.integer('step_number').unsigned().notNullable();
      table.string('step').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};

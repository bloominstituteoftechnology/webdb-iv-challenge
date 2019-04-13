
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', table =>{
      table.increments('id');
      table.string('recipe_step').notNullable();
      table.integer('step_order');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps')
};

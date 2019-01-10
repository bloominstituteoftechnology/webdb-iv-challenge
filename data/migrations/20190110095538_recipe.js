
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', table =>{
      table.increments('id');
      table.string('recipe_name').notNullable();
      table.integer('ingredient_id').unsigned().unique();
      table.foreign('ingredient_id').references('id').on('ingredients');
      table.integer('step_id').unsigned().unique();
      table.foreign('step_id').references('id').on('steps');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe');
};

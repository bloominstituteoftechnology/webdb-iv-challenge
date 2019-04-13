
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish', table =>{
      table.increments('id');
      table.string('dish_name').notNullable();
      table.integer('recipe_id').unsigned();
      table.foreign('recipe_id').references('id').on('recipe');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dish');
};

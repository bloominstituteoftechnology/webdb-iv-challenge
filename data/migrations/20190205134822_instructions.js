
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', table => {
    ///id
    table.increments();
    table.string('instruction').notNullable()
  //step?
    table.integer('step').unsigned()
  //recipe id
    table.integer('recipeId').unsigned();
    table.foreign('recipeId').references('id').on('recipes')
    
  } )
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};

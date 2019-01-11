
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', table => {
     table.increments(); 
     table.integer('order').unsigned(); 
     table.integer('recipes_id').unsigned(); 
     table.foreign('recipes_id').references('id').on('recipes'); 
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions'); 
};

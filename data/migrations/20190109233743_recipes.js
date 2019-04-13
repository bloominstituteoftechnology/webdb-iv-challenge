
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table => {
      table.increments(); 
      table.string('name').notNullable(); 
      table.integer('dishes_id').unsigned(); 
      table.foreign('dishes_id').references('id').on('dishes')

  })
};

exports.down = function(knex, Promise) {
    return knex.shema.dropTableIfExists('recipes'); 
  
};

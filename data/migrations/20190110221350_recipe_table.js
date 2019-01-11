
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', table=>{
      table.increments();
      table.string('name').unique();
  })
};

exports.down = function(knex, Promise) {
  
};

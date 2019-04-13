
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', table=>{
      table.increments();
      table.float('qty').defaultTo(1);
      table.integer('recipe_id').unsigned();
      table.foreign('recipe_id').references('id')
        .on('recipes');
  })
};

exports.down = function(knex, Promise) {
  
};

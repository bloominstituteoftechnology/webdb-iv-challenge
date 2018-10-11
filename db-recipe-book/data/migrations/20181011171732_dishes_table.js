
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {
      tbl.increments();
      tbl.string('name', 50).notNullable();
      
      tbl.integer('recipe_id').unsigned();
      tbl.foreign('recipe_id').references('recipes.recipe_id')
    
  })
};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('dishes');
  
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tbl){
      tbl.increments();
      tbl.float('quantity').notNullable();
      tbl.string('ingredient_name').notNullable().unique();
      tbl.integer('recipe_id').unsigned();
      tbl.foreign('recipe_id').references('recipes.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients')
};

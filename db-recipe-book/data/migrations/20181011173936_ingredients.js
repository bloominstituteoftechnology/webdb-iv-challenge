exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl){
        tbl.increments();
        tbl.string('name', 50).notNullable();
        tbl.integer('ingredient_id').unsigned();
        tbl.foreign('ingredient_id').references('recipes.recipe_id');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};

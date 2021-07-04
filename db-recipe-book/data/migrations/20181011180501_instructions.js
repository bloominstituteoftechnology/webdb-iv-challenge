
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl){
        tbl.increments();
        tbl.string('name', 50).notNullable();
        tbl.integer('recipe_id').unsigned();
        tbl.foreign('recipe_id').references('dishes.dish_id');
        tbl.string('instructions');
        tbl.foreign('instructions').references('instructions.instructions_id');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};

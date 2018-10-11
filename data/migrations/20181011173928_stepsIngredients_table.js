
exports.up = function(knex, Promise) {
    return knex.schema.createTable('stepsIngredients', function(tbl) {
        tbl.increments();
        tbl
        .integer('step_id')
        .unsigned()
        .references('id')
        .inTable('steps');
        tbl
        .integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stepsIngredients');
};

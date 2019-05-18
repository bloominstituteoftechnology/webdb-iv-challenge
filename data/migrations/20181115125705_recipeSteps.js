
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipeSteps', function(tbl) {
        tbl.integer('recipeID').unsigned();
        tbl.foreign('recipeID').references('id').inTable('recipes');
        tbl.integer('stepID').unsigned();
        tbl.foreign('stepID').references('id').inTable('steps');
        tbl.integer('position');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipeSteps');
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', tbl => {
      tbl.increments();

      tbl
        .string('step');

      tbl
        .integer('order');

      tbl
        .integer('recipeId')
        .unsigned()
        .references('id')
        .inTable('recipes');

      tbl
        .integer('ingredientId')
        .unsigned()
        .references('id')
        .inTable('ingredients');
  })
};

exports.down = function(knex, Promise) {
  return knex.schems.dropTableIfExists('steps');
};

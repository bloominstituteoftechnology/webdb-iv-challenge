
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', function(tbl) {
      tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes');
      
      tbl
        .integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients');

      tbl
        .string('amount').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};

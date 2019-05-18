
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
      tbl.increments();

      tbl
        .string('ingredient', 255)
        .notNullable();
    
      tbl
        .float('quantity')

      tbl
        .integer('recipeId')
        .unsigned()
        .references('id')
        .inTable('recipes');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};

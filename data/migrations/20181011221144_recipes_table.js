
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Recipes', function(tbl) {
    tbl.increments();
    tbl.string('recipeName', 255).notNullable();
    tbl
      .integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('Dishes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Recipes')
};

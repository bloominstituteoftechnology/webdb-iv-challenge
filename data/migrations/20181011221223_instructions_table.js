
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Instructions', function(tbl) {
    tbl.increments();
    tbl.integer('Step').notNullable();
    tbl.string('Description', 255).notNullable();
    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('Recipes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Instructions')
};

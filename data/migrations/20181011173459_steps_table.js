
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', function(tbl) {
     
    tbl.increments();
    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes');
    tbl.string('step').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};

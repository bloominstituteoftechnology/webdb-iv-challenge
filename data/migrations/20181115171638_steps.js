
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', function(tbl){
    tbl.increments();
    tbl.string('step').notNullable();
    tbl.integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', function(tbl){
      tbl.increments()
      tbl.string('step', 256).notNullable()
      tbl
        .integer('recipes_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions')
};

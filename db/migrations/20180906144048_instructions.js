
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions',function(tbl){
      tbl.increments('id');
      tbl.integer('step');
      tbl.string('name');
      tbl
        .integer('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipes')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instructions');
};

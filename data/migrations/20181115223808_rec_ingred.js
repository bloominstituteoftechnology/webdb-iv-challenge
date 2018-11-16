
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rec_ingred', function(tbl){
    tbl.increments();
    tbl.integer('recipe_id')
        .notnullable()
        .unsigned()
        .references('id')
        .intable('recipes')
    tbl.integer('ingredient_id')
        .notnullable()
        .unsigned()
        .references('id')
        .intable('ingredients')
    table.float('quantity')
        .notNullable()

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('rec_ingred')
};

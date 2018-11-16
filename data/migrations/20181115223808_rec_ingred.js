
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rec_ingred', function(tbl){
    tbl.increments();
    tbl.integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes')
    tbl.integer('ingredient_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('ingredients')
    tbl.float('quantity')
        .notNullable()

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('rec_ingred')
};

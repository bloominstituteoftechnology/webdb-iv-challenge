
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', function(tbl) {
    tbl.increments('id');
    
    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable();

    tbl
      .foreign('recipe_id')
      .references('recipe_id')
      .inTable('recipes');

    
    tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable();

    tbl
      .foreign('ingredient_id')
      .references('ingredient_id')
      .inTable('ingredients');
      

    tbl
      .string('amount', 64)
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};



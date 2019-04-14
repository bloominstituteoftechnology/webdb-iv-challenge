exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe-ingredients', tbl => {
    // primary key
    tbl.increments();
    // foreign key for recipe
    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes');

    // foreign key for ingredient
    tbl
      .integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients');
  });
};

exports.down = function(knex, Promise) {};

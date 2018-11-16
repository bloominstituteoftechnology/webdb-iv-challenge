exports.up = (knex, Promise) => {
  return knex.schema.createTable('recipes_ingredients', tbl => {
    tbl.increments();
    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes');
    tbl
      .integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients');
    tbl
      .float('quantity')
      .unsigned()
      .notNullable();
  });
};

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('recipes_ingredients');

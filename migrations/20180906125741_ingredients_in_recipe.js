
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients_in_recipe', tbl => {
      tbl.increments();
      tbl.float('quantity')
        .notNullable();
      tbl.string('description')
        .notNullable();
      tbl.integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes');
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients_in_recipe');
};

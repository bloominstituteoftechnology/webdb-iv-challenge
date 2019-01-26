
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('ingredient_name').notNullable()
      tbl.float('ingredient_quantity').notNullable()
      tbl.integer('recipe_id').unsigned()
      tbl.foreign('recipe_id').references('id').on('recipes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients')
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', tbl => {
      tbl.increments()
      tbl.text('ingredient_text')
      tbl.integer('recipe_id').unsigned()
      tbl.foreign('recipe_id').references('id').on('recipes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions')
};

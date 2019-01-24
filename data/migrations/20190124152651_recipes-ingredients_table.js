
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes_ingredients', 
    table => {
      table.increments()
      table.integer('recipe_id').notNullable().unique()
      table.integer('ingredient_id').notNullable()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes_ingredients')
};

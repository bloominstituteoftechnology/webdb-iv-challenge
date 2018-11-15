
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', table => {
      table.increments()
      table.string('step 1', 255)
      table.integer('recipe_id').unsigned().references('id').inTable('recipes')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps')
};

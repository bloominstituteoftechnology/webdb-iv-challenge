exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', table => {
    table.integer('recipe_id').references('id').on('recipe');
    table.json('ingredients').notNullable().references('ingredients').on('instructions');

  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};


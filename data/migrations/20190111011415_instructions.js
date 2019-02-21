exports.up = function (knex, Promise) {
  return knex.schema.createTable('instructions', table => {
    table.integer('recipe_id').references('id').on('recipe');
    table.string('Name').notNullable();
    table.json('ingredients').notNullable();
    table.json('Steps').notNullable();
    
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};

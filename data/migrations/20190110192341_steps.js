
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', table => {
      table.increments();
      table.integer('Step_Number').notNullable().unique();
      table.integer('Ingredient_Id').unsigned().unique();
      table.foreign('Ingredient_Id').references('id').on('ingredients');
      table.float('quantity').notNullable();
      table.string('instructions').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};

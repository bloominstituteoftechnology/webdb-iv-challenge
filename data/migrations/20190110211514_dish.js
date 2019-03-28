
exports.up = function(knex, Promise) {
  return knex.schema.createTable ('dish', table => {
      table.increments();
      table.string('dish').notNullable();
      table.integer('ingredient_id').unsigned().unique();
      table.foreign('ingredient_id').references('id').on('ingredients');
  })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('dish');
};

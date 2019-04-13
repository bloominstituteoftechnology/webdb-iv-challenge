
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', table => {
    table.increments();
    table.string('').notNullable();
    table.integer('dish_id').unsigned().references('id').inTable('dish');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe');
};

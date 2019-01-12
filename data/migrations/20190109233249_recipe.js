
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', table => {
    table.increments();
    table.text('name').notNullable();
    table.integer('dish_id').unsigned().references('id').inTable('dish');
    table.integer('steps_id').unsigned().references('id').inTable('steps');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe');
};

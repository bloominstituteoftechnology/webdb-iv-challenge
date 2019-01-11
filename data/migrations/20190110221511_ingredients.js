
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
    table.increments();
    table.string('name').notNullable();
    table.float('amount').notNullable();
    table.interger('recipe_id').unsigned().unique();
    table.foreign('recipe_id').references('id').on('recipe');
  })
};

exports.down = function(knex, Promise) {

};

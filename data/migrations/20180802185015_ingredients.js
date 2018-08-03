exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.integer('recipe_id')
         .notNullable()
         .references('id')
         .inTable('recipes')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {

};

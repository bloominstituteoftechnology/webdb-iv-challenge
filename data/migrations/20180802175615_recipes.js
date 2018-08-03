exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.integer('dish_id')
         .notNullable()
         .references('id')
         .inTable('dishes')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishes', tbl => {
      tbl.increments();
      tbl
        .string('name')
        .unique()
        .notNullable();
      tbl
        .string('type')
        .notNullable()
        .defaultTo('American');
      tbl
        .integer('count')
        .notNullable()
        .defaultTo(1);
    })
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .integer('dish_id')
        .references('id')
        .inTable('dishes');
      tbl.string('recipe_ins').notNullable();
      tbl.integer('order_number').notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes').dropTable('recipes');
};

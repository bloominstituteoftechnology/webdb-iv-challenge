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
    })
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .integer('dish_id')
        .references('id')
        .inTable('dishes');
      tbl.string('ingredients').notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes').dropTable('recipes');
};
